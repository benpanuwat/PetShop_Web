import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent {
  public loading = false;
  public orderId = 0;
  public order: any = null;
  public items: any[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: OrderService,
    private _messageService: MessageService,
  ) { }

  ngOnInit() {
    this.orderId = Number(this._route.snapshot.paramMap.get('id'));

    if (!this.orderId) {
      this.showError('ไม่พบรหัสรายการขาย');
      this.back();
      return;
    }

    this.loadDetail();
  }

  loadDetail() {
    this.loading = true;
    this._service.detail(this.orderId).subscribe({
      next: (resp: any) => {
        this.order = resp?.data?.order ?? null;
        this.items = resp?.data?.items ?? [];
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showError(err?.error?.message ?? 'โหลดข้อมูลรายการขายไม่สำเร็จ');
        this.back();
      }
    });
  }

  get itemCount(): number {
    return this.items.reduce((sum, item) => sum + Number(item?.qty ?? 0), 0);
  }

  back() {
    this._router.navigate(['/app/order']);
  }

  showError(message: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: message });
  }
}
