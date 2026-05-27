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

  public chartMode: 'daily' | 'monthly' = 'daily';
  public chartYear: number = new Date().getFullYear();
  public chartMonth: number = new Date().getMonth() + 1;
  public chartLoading = false;
  public chartData: any = null;
  public chartOptions: any = null;
  private chartCounts: number[] = [];

  public chartModeOptions = [
    { label: 'รายวัน', value: 'daily' },
    { label: 'รายเดือน', value: 'monthly' },
  ];

  public monthOptions = [
    { label: 'มกราคม', value: 1 }, { label: 'กุมภาพันธ์', value: 2 },
    { label: 'มีนาคม', value: 3 }, { label: 'เมษายน', value: 4 },
    { label: 'พฤษภาคม', value: 5 }, { label: 'มิถุนายน', value: 6 },
    { label: 'กรกฎาคม', value: 7 }, { label: 'สิงหาคม', value: 8 },
    { label: 'กันยายน', value: 9 }, { label: 'ตุลาคม', value: 10 },
    { label: 'พฤศจิกายน', value: 11 }, { label: 'ธันวาคม', value: 12 },
  ];

  public yearOptions = Array.from({ length: 5 }, (_, i) => {
    const y = new Date().getFullYear() - 2 + i;
    return { label: `${y}`, value: y };
  });

  constructor(
    private _service: DashboardService,
    private _messageService: MessageService,
  ) { }

  ngOnInit() {
    this.loadDashboard();
    this.loadChart();
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

  loadChart() {
    this.chartLoading = true;
    const req = this.chartMode === 'daily'
      ? this._service.getChartDaily(this.chartYear, this.chartMonth)
      : this._service.getChartMonthly(this.chartYear);

    req.subscribe({
      next: (resp: any) => {
        const d = resp.data;
        this.chartCounts = d.counts;
        this.buildChart(d.labels, d.sales, d.counts);
        this.chartLoading = false;
      },
      error: () => { this.chartLoading = false; }
    });
  }

  private buildChart(labels: string[], sales: number[], counts: number[]) {
    const isDaily = this.chartMode === 'daily';
    this.chartData = {
      labels,
      datasets: [{
        label: 'ยอดขาย (บาท)',
        data: sales,
        backgroundColor: 'rgba(15, 118, 110, 0.72)',
        borderColor: '#0f766e',
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
      }]
    };
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 350 },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: (items: any[]) => isDaily ? `วันที่ ${items[0].label}` : items[0].label,
            label: (ctx: any) => ` ยอดขาย: ${Number(ctx.raw).toLocaleString('th-TH', { minimumFractionDigits: 2 })} บาท`,
            afterLabel: (ctx: any) => ` จำนวนบิล: ${counts[ctx.dataIndex]} บิล`,
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: '#f1f5f9' },
          ticks: {
            callback: (v: any) => Number(v).toLocaleString('th-TH'),
            font: { size: 11 }
          }
        },
        x: {
          grid: { display: false },
          ticks: { font: { size: 11 } }
        }
      }
    };
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
