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
            date_start: new Date(this.formSetting.value.date_start).toISOString(),
            date_end: new Date(this.formSetting.value.date_end).toISOString(),
          });
        }),
      )
      .subscribe((resp: any) => {
        this.data = (resp.data ?? []).map((item: any, index: number) => ({ ...item, order: index + 1 }));
        this.totalRecords = resp.totalRecords;
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
      date_start: new Date(this.formSetting.value.date_start).toISOString(),
      date_end: new Date(this.formSetting.value.date_end).toISOString(),
    }).subscribe((resp: any) => {
      this.data = resp.data;
      this.totalRecords = resp.totalRecords;
      this.loading = false;
    });
  }


  filterData() {
    this.table.reset();
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
