import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { WorkCalendarService } from './work_calendar.service';

interface DayCell {
  date: Date;
  key: string;          // yyyy-MM-dd
  day: number;
  inMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
  items: any[];         // รายการผู้ใช้งานที่เข้างานวันนั้น
}

@Component({
  selector: 'app-work_calendar',
  templateUrl: './work_calendar.component.html',
  styleUrls: ['./work_calendar.component.scss']
})
export class WorkCalendarComponent {
  public permissions: any = {};
  public loading: boolean = false;

  public readonly monthNames = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
  public readonly weekDayNames = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];

  // สีประจำผู้ใช้งาน (วนตามลำดับ id ที่พบ)
  private readonly palette = ['#6366f1', '#14b8a6', '#f59e0b', '#ef4444', '#0ea5e9', '#a855f7', '#84cc16', '#ec4899'];
  private colorMap = new Map<number, string>();

  public viewYear: number;
  public viewMonth: number;        // 1 - 12
  public monthDate: Date;          // ใช้กับ p-calendar (เลือกเดือน)

  public users: any[] = [];
  public selectedUserId: number = 0;

  public records: any[] = [];      // 1 แถว = 1 คน / 1 วัน
  public summary: any[] = [];      // สรุปรายคนของทั้งเดือน
  public totalDays: number = 0;
  public totalLogins: number = 0;

  public weeks: DayCell[][] = [];

  // ===== dialog รายละเอียดรายวัน =====
  public displayDay: boolean = false;
  public dayLoading: boolean = false;
  public dayTitle: string = '';
  public dayRows: any[] = [];      // ทุกครั้งที่เข้าสู่ระบบของวันนั้น

  constructor(
    private _service: WorkCalendarService,
    private _messageService: MessageService,
  ) {
    this.permissions = JSON.parse(localStorage.getItem('permissions') || '{}');
  }

  ngOnInit() {
    const now = new Date();
    this.viewYear = now.getFullYear();
    this.viewMonth = now.getMonth() + 1;
    this.monthDate = new Date(this.viewYear, this.viewMonth - 1, 1);

    this.loadUsers();
    this.load();
  }

  loadUsers() {
    this._service.getUsers().subscribe({
      next: (resp: any) => {
        this.users = [{ id: 0, name: 'ทุกคน' }, ...(resp.data ?? [])];
      },
      error: (err) => this.showError(err?.error?.message ?? 'โหลดรายชื่อผู้ใช้งานไม่สำเร็จ'),
    });
  }

  load() {
    this.loading = true;
    this._service.getCalendar({ year: this.viewYear, month: this.viewMonth, user_id: this.selectedUserId })
      .subscribe({
        next: (data: any) => {
          this.records = data?.records ?? [];
          this.summary = data?.users ?? [];
          this.totalDays = data?.total_days ?? 0;
          this.totalLogins = data?.total_logins ?? 0;
          this.buildWeeks();
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          this.records = [];
          this.summary = [];
          this.totalDays = 0;
          this.totalLogins = 0;
          this.buildWeeks();
          this.showError(err?.error?.message ?? 'โหลดข้อมูลปฏิทินทำงานไม่สำเร็จ');
        },
      });
  }

  // ===== เปลี่ยนเดือน =====
  selectMonth() {
    if (!this.monthDate) return;
    this.viewYear = this.monthDate.getFullYear();
    this.viewMonth = this.monthDate.getMonth() + 1;
    this.load();
  }

  changeMonth(step: number) {
    const d = new Date(this.viewYear, this.viewMonth - 1 + step, 1);
    this.viewYear = d.getFullYear();
    this.viewMonth = d.getMonth() + 1;
    this.monthDate = d;
    this.load();
  }

  goToday() {
    const now = new Date();
    this.viewYear = now.getFullYear();
    this.viewMonth = now.getMonth() + 1;
    this.monthDate = new Date(this.viewYear, this.viewMonth - 1, 1);
    this.load();
  }

  selectUser() {
    this.load();
  }

  get monthLabel(): string {
    return `${this.monthNames[this.viewMonth - 1]} ${this.viewYear}`;
  }

  // ===== สร้างตารางปฏิทิน =====
  private buildWeeks() {
    const byDate = new Map<string, any[]>();
    for (const r of this.records) {
      if (!byDate.has(r.date)) byDate.set(r.date, []);
      byDate.get(r.date).push(r);
    }

    this.colorMap.clear();
    let ci = 0;
    for (const r of this.records) {
      if (!this.colorMap.has(r.user_id)) {
        this.colorMap.set(r.user_id, this.palette[ci % this.palette.length]);
        ci++;
      }
    }

    const first = new Date(this.viewYear, this.viewMonth - 1, 1);
    const daysInMonth = new Date(this.viewYear, this.viewMonth, 0).getDate();
    const startOffset = first.getDay();                                   // 0 = อาทิตย์
    const weekCount = Math.ceil((startOffset + daysInMonth) / 7);
    const todayKey = this.dateKey(new Date());

    this.weeks = [];
    const cursor = new Date(this.viewYear, this.viewMonth - 1, 1 - startOffset);
    for (let w = 0; w < weekCount; w++) {
      const week: DayCell[] = [];
      for (let d = 0; d < 7; d++) {
        const date = new Date(cursor);
        const key = this.dateKey(date);
        week.push({
          date,
          key,
          day: date.getDate(),
          inMonth: date.getMonth() === this.viewMonth - 1,
          isToday: key === todayKey,
          isWeekend: date.getDay() === 0 || date.getDay() === 6,
          items: byDate.get(key) ?? [],
        });
        cursor.setDate(cursor.getDate() + 1);
      }
      this.weeks.push(week);
    }
  }

  private dateKey(d: Date): string {
    const m = (d.getMonth() + 1).toString().padStart(2, '0');
    const dd = d.getDate().toString().padStart(2, '0');
    return `${d.getFullYear()}-${m}-${dd}`;
  }

  userColor(userId: number): string {
    return this.colorMap.get(userId) ?? '#64748b';
  }

  // ข้อความ tooltip ของชิปในปฏิทิน (บรรทัดเดียว)
  chipTooltip(item: any): string {
    const time = item.first_time === item.last_time
      ? item.first_time
      : `${item.first_time} - ${item.last_time}`;
    return `${item.name} • ${time} (${item.count} ครั้ง)`;
  }

  // ===== dialog รายละเอียดรายวัน =====
  openDay(cell: DayCell) {
    if (!cell.items.length) return;
    this.dayTitle = `${cell.day} ${this.monthNames[cell.date.getMonth()]} ${cell.date.getFullYear()}`;
    this.dayRows = [];
    this.dayLoading = true;
    this.displayDay = true;
    this._service.getDay({ date: cell.key, user_id: this.selectedUserId }).subscribe({
      next: (data: any) => {
        this.dayRows = data?.data ?? [];
        this.dayLoading = false;
      },
      error: (err) => {
        this.dayLoading = false;
        this.showError(err?.error?.message ?? 'โหลดรายละเอียดไม่สำเร็จ');
      },
    });
  }

  showError(message: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: message });
  }
  showSuccess(message: string) {
    this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: message });
  }
}
