import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public loading = false;
  public summary: any = null;
  public stats = [
    { label: 'ยอดขายวันนี้', value: 0, icon: 'pi pi-wallet', tone: 'teal', route: '/app/order' },
    { label: 'จำนวนบิลวันนี้', value: 0, icon: 'pi pi-shopping-cart', tone: 'blue', route: '/app/order' },
    { label: 'บิลยกเลิกวันนี้', value: 0, icon: 'pi pi-times-circle', tone: 'red', route: '/app/order' },
    { label: 'สินค้าใกล้หมด', value: 0, icon: 'pi pi-exclamation-triangle', tone: 'amber', route: '/app/stock' },
  ];

  public todayOrders: any[] = [];
  public lowStockItems: any[] = [];
  public paymentSummary: { label: string, amount: number, count: number }[] = [];
  public cashClosing: any = null;

  constructor(
    private _service: DashboardService,
    private _messageService: MessageService,
  ) { }

  ngOnInit() {
    this.loadDashboard();
  }

  loadDashboard() {
    this.loading = true;

    this._service.getSummary().subscribe({
      next: (resp: any) => {
        this.summary = resp?.data ?? {};
        this.todayOrders = this.summary?.today_orders ?? [];
        this.lowStockItems = this.summary?.low_stock_items ?? [];
        this.cashClosing = this.summary?.cash_closing ?? null;
        this.paymentSummary = this.summary?.payment_summary ?? [];

        this.stats = [
          { label: 'ยอดขายวันนี้', value: Number(this.summary?.sales_total || 0), icon: 'pi pi-wallet', tone: 'teal', route: '/app/order' },
          { label: 'จำนวนบิลวันนี้', value: Number(this.summary?.order_count || 0), icon: 'pi pi-shopping-cart', tone: 'blue', route: '/app/order' },
          { label: 'บิลยกเลิกวันนี้', value: Number(this.summary?.cancel_count || 0), icon: 'pi pi-times-circle', tone: 'red', route: '/app/order' },
          { label: 'สินค้าใกล้หมด', value: Number(this.summary?.low_stock_count || 0), icon: 'pi pi-exclamation-triangle', tone: 'amber', route: '/app/stock' },
        ];

        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showError(err?.error?.message ?? 'โหลดข้อมูล Dashboard ไม่สำเร็จ');
      }
    });
  }

  get averageBill(): number {
    return Number(this.summary?.average_bill || 0);
  }

  get closingDifferenceTone(): string {
    const diff = Number(this.cashClosing?.diff_amount || 0);
    if (diff > 0) {
      return 'positive';
    }
    if (diff < 0) {
      return 'negative';
    }
    return 'neutral';
  }

  showError(message: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: message });
  }
}
