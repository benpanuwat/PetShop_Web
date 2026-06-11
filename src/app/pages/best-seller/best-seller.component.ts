import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss']
})
export class BestSellerComponent {
  public loading = false;
  public period = 'month';
  public readonly periodOptions = [
    { label: 'วันนี้', value: 'today' },
    { label: 'เดือนนี้', value: 'month' },
    { label: 'ปีนี้', value: 'year' },
    { label: 'ทั้งหมด', value: 'all' },
  ];
  public data: any[] = [];

  constructor(
    private _service: DashboardService,
    private _messageService: MessageService,
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading = true;
    this._service.getBestSeller(this.period, 100).subscribe({
      next: (resp: any) => {
        this.data = resp?.data ?? [];
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showError(err?.error?.message ?? 'โหลดข้อมูลสินค้าขายดีไม่สำเร็จ');
      }
    });
  }

  onPeriodChange() {
    this.load();
  }

  showError(message: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: message });
  }
}
