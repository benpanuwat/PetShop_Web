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
  public stats: { label: string, value: number, icon: string, tone: string, route: string, type: 'amount' | 'count', hint?: string }[] = [
    { label: 'ยอดขายวันนี้', value: 0, icon: 'pi pi-wallet', tone: 'teal', route: '/app/order', type: 'amount', hint: 'เงินสด / โอน / คนละครึ่ง / ค้างชำระ' },
    { label: 'ยอดขาย Grab / Line Man', value: 0, icon: 'pi pi-send', tone: 'violet', route: '/app/order', type: 'amount', hint: 'ชำระผ่านแพลตฟอร์มเดลิเวอรี่' },
    { label: 'จำนวนบิลวันนี้', value: 0, icon: 'pi pi-shopping-cart', tone: 'blue', route: '/app/order', type: 'count' },
    { label: 'บิลยกเลิกวันนี้', value: 0, icon: 'pi pi-times-circle', tone: 'red', route: '/app/order', type: 'count' },
    { label: 'สินค้าใกล้หมด', value: 0, icon: 'pi pi-exclamation-triangle', tone: 'amber', route: '/app/stock', type: 'count' },
  ];

  public todayOrders: any[] = [];
  public lowStockItems: any[] = [];
  public paymentSummary: { label: string, amount: number, count: number, group?: string }[] = [];
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
          { label: 'ยอดขายวันนี้', value: Number(this.summary?.sales_total || 0), icon: 'pi pi-wallet', tone: 'teal', route: '/app/order', type: 'amount', hint: `เงินสด / โอน / คนละครึ่ง / ค้างชำระ • ${Number(this.summary?.sales_count || 0)} บิล` },
          { label: 'ยอดขาย Grab / Line Man', value: Number(this.summary?.sales_delivery || 0), icon: 'pi pi-send', tone: 'violet', route: '/app/order', type: 'amount', hint: `ชำระผ่านแพลตฟอร์มเดลิเวอรี่ • ${Number(this.summary?.delivery_count || 0)} บิล` },
          { label: 'จำนวนบิลวันนี้', value: Number(this.summary?.order_count || 0), icon: 'pi pi-shopping-cart', tone: 'blue', route: '/app/order', type: 'count' },
          { label: 'บิลยกเลิกวันนี้', value: Number(this.summary?.cancel_count || 0), icon: 'pi pi-times-circle', tone: 'red', route: '/app/order', type: 'count' },
          { label: 'สินค้าใกล้หมด', value: Number(this.summary?.low_stock_count || 0), icon: 'pi pi-exclamation-triangle', tone: 'amber', route: '/app/stock', type: 'count' },
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
        this.buildChart(d.labels, d.sales, d.counts, d.delivery ?? [], d.delivery_counts ?? []);
        this.chartLoading = false;
      },
      error: () => { this.chartLoading = false; }
    });
  }

  private buildChart(labels: string[], sales: number[], counts: number[], delivery: number[], deliveryCounts: number[]) {
    const isDaily = this.chartMode === 'daily';
    const money = (v: any) => Number(v || 0).toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    this.chartData = {
      labels,
      datasets: [
        {
          label: 'ยอดขาย (บาท)',
          data: sales,
          backgroundColor: 'rgba(15, 118, 110, 0.72)',
          borderColor: '#0f766e',
          borderWidth: 2,
          borderRadius: 6,
          borderSkipped: false,
        },
        {
          label: 'Grab / Line Man (บาท)',
          data: delivery,
          backgroundColor: 'rgba(124, 58, 237, 0.72)',
          borderColor: '#7c3aed',
          borderWidth: 2,
          borderRadius: 6,
          borderSkipped: false,
        }
      ]
    };
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 350 },
      plugins: {
        legend: { display: true, position: 'bottom', labels: { boxWidth: 14, font: { size: 11 } } },
        tooltip: {
          callbacks: {
            title: (items: any[]) => isDaily ? `วันที่ ${items[0].label}` : items[0].label,
            label: (ctx: any) => {
              const isDelivery = ctx.datasetIndex === 1;
              const bills = isDelivery ? (deliveryCounts[ctx.dataIndex] ?? 0) : (counts[ctx.dataIndex] ?? 0);
              return ` ${ctx.dataset.label.replace(' (บาท)', '')}: ${money(ctx.raw)} บาท (${bills} บิล)`;
            },
            footer: (items: any[]) => {
              const i = items[0].dataIndex;
              const total = Number(sales[i] || 0) + Number(delivery[i] || 0);
              return `รวม: ${money(total)} บาท`;
            },
          }
        }
      },
      scales: {
        y: {
          stacked: true,
          beginAtZero: true,
          grid: { color: '#f1f5f9' },
          ticks: {
            callback: (v: any) => Number(v).toLocaleString('th-TH'),
            font: { size: 11 }
          }
        },
        x: {
          stacked: true,
          grid: { display: false },
          ticks: { font: { size: 11 } }
        }
      }
    };
  }

  get averageBill(): number {
    return Number(this.summary?.average_bill || 0);
  }

  // ยอดขายหน้าร้าน + Grab/Line Man
  get salesGrandTotal(): number {
    return Number(this.summary?.sales_grand_total || 0);
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
