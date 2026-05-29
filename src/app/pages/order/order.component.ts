import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { Subject, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  public permissions: any = {};

  public displayAdd: boolean = false;
  public displayEdit: boolean = false;
  public cancelDisplay: boolean = false;

  @ViewChild('dt') table: Table;
  public loading: boolean;
  public totalRecords: number = 0;
  public search: FormControl = new FormControl('');
  public data: any[];
  public summary: any[] = [];

  public formSetting: FormGroup;
  public cancelForm: FormGroup;

  public cancelId: string;

  constructor(
    private _fb: FormBuilder,
    private _service: OrderService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _messageService: MessageService,
  ) {
    this.permissions = JSON.parse(localStorage.getItem('permissions'));
  }

  ngOnInit() {
    const now = new Date();
    this.formSetting = this._fb.group({
      date_start: now,
      date_end: now,
    });

    this.cancelForm = this._fb.group({
      remark: "",
    });

    this.search.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((query) => {
          this.loading = true;
          const page = this.table.first / this.table.rows + 1;
          return this._service.page({
            perPage: this.table.rows,
            page,
            search: query,
            date_start: this.toLocalDate(this.formSetting.value.date_start),
            date_end: this.toLocalDate(this.formSetting.value.date_end),
          });
        }),
      )
      .subscribe((resp: any) => {
        this.data = (resp.data ?? []).map((item: any, index: number) => ({ ...item, order: index + 1 }));
        this.totalRecords = resp.totalRecords;
        this.summary = resp.summary ?? [];
        this.loading = false;
      });
  }

  loadTable(event: LazyLoadEvent) {
    this.loading = true;
    const page = event.first / event.rows + 1;
    this._service.page({
      perPage: event.rows,
      page,
      search: this.search.value,
      date_start: this.toLocalDate(this.formSetting.value.date_start),
      date_end: this.toLocalDate(this.formSetting.value.date_end),
    }).subscribe((resp: any) => {
      this.data = resp.data;
      this.totalRecords = resp.totalRecords;
      this.summary = resp.summary ?? [];
      this.loading = false;
    });
  }

  get summaryTotal() {
    const s = this.summary ?? [];
    return {
      count: s.reduce((a, x) => a + (x.count || 0), 0),
      total: s.reduce((a, x) => a + (x.total || 0), 0),
      discount: s.reduce((a, x) => a + (x.discount || 0), 0),
      cash_transfer: s.reduce((a, x) => a + (x.cash_transfer || 0), 0),
      cash_received: s.reduce((a, x) => a + (x.cash_received || 0), 0),
      cash_return: s.reduce((a, x) => a + (x.cash_return || 0), 0),
    };
  }


  filterData() {
    this.table.reset();
  }

  private toLocalDate(value: any): string {
    const d = new Date(value);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  openCancel(id: any) {
    this.cancelId = id;
    this.cancelDisplay = true;
    this.cancelForm.reset()
  }

  openDetail(id: number) {
    this._router.navigate(['/app/order/detail', id]);
  }

  confirmCancel() {
    this._service.cancelOrder(this.cancelId, this.cancelForm.value).subscribe({
      next: (resp: any) => {
        this.showSuccess(resp.message);
        this.cancelDisplay = false
        this.table.reset();
      },
      error: (err) => {
        this.showError(err.error.message);
      },
    });
  }

  cencelCancel() {
    this.cancelDisplay = false
  }

  showError(massage: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
  }
  showSuccess(massage: string) {
    this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
  }

}
