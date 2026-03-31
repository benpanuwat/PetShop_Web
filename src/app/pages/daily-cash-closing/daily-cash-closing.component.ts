import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { concatAll, debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { DailyCashClosingService } from './daily-cash-closing.service';

@Component({
  selector: 'app-daily-cash-closing',
  templateUrl: './daily-cash-closing.component.html',
  styleUrls: ['./daily-cash-closing.component.scss']
})
export class DailyCashClosingComponent {
  public permissions: any = {};
  public branchId: number = Number(localStorage.getItem('branch')) || 0;

  public displayAdd = false;
  public displayEdit = false;

  @ViewChild('dt') table: Table;
  public loading: boolean;
  public totalRecords = 0;
  public search: FormControl = new FormControl('');
  public data: any[] = [];

  public formAdd: FormGroup;
  public formEdit: FormGroup;
  public editId: string;

  constructor(
    private _fb: FormBuilder,
    private _service: DailyCashClosingService,
    private _messageService: MessageService,
  ) {
    this.permissions = JSON.parse(localStorage.getItem('permissions') || '{}');
  }

  ngOnInit() {
    this.formAdd = this._fb.group({
      closing_date: new Date(),
      opening_amount: 0,
      cash_sales: 0,
      expected_amount: 0,
      actual_amount: 0,
      diff_amount: 0,
      cash_1000: 0,
      cash_500: 0,
      cash_100: 0,
      cash_50: 0,
      cash_20: 0,
      cash_10: 0,
      cash_5: 0,
      cash_2: 0,
      cash_1: 0,
      remark: '',
    });

    this.formEdit = this._fb.group({
      closing_date: new Date(),
      opening_amount: 0,
      cash_sales: 0,
      expected_amount: 0,
      actual_amount: 0,
      diff_amount: 0,
      cash_1000: 0,
      cash_500: 0,
      cash_100: 0,
      cash_50: 0,
      cash_20: 0,
      cash_10: 0,
      cash_5: 0,
      cash_2: 0,
      cash_1: 0,
      remark: '',
      last_status: false,
    });

    this.search.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((query) => {
          this.loading = true;

          const first = this.table.first;
          const rows = this.table.rows;

          const page = first / rows + 1;

          this._service.page({ perPage: rows, page: page, search: query })
            .subscribe((resp: any) => {
              this.data = this.extractRows(resp);
              this.data = this.data.map((item, index) => ({ ...item, order: index + 1 }));
              this.totalRecords = this.extractTotalRecords(resp, this.data.length);
              this.loading = false;
            });
        }),
      )
      .subscribe();
  }

  loadTable(event: LazyLoadEvent) {
    this.loading = true;

    const page = event.first / event.rows + 1;

    this._service.page({ perPage: event.rows, page, search: this.search.value })
      .subscribe((resp: any) => {
        this.data = this.extractRows(resp);
        this.totalRecords = this.extractTotalRecords(resp, this.data.length);
        this.loading = false;
      });
  }

  extractRows(resp: any): any[] {
    if (Array.isArray(resp)) {
      return resp;
    }

    if (Array.isArray(resp?.data)) {
      return resp.data;
    }

    if (Array.isArray(resp?.data?.data)) {
      return resp.data.data;
    }

    return [];
  }

  extractTotalRecords(resp: any, fallback: number): number {
    return Number(resp?.totalRecords ?? resp?.data?.totalRecords ?? fallback);
  }

  openAdd() {
    this._service.getLastDailyCashClosing()
      .subscribe((resp: any) => {
        this.formAdd = this._fb.group({
          opening_amount: resp.data.opening_amount,
          cash_sales: resp.data.cash_sales,
          expected_amount: resp.data.opening_amount + resp.data.cash_sales,
          actual_amount: 0,
          diff_amount: 0,
          cash_1000: 0,
          cash_500: 0,
          cash_100: 0,
          cash_50: 0,
          cash_20: 0,
          cash_10: 0,
          cash_5: 0,
          cash_2: 0,
          cash_1: 0,
          remark: '',
        });
        this.displayAdd = true;
      });
  }

  addConfirm() {
    this._service.addDailyCashClosing(this.formAdd.value).subscribe({
      next: (resp: any) => {
        this.displayAdd = false;
        this.showSuccess(resp.message);
        this.table.reset();
      },
      error: (err) => {
        this.showError(err.error?.message || 'ไม่สามารถบันทึกข้อมูลได้');
      },
    });
  }

  addCancel() {
    this.displayAdd = false;
  }

  openEdit(id: any) {
    this.editId = id;
    this._service.getDailyCashClosing(this.editId)
      .subscribe((resp: any) => {
        this.formEdit.patchValue({
          ...resp.data
        })
        this.displayEdit = true;
      });
  }

  confirmEdit() {
    this._service.updateDailyCashClosing(this.editId, this.formEdit.value).subscribe({
      next: (resp: any) => {
        this.displayEdit = false;
        this.showSuccess(resp.message);
        this.table.reset();
      },
      error: (err) => {
        this.showError(err.error?.message || 'ไม่สามารถแก้ไขข้อมูลได้');
      },
    });
  }

  cancelEdit() {
    this.displayEdit = false;
  }

  changePrice() {
    const actualAmount =
      (Number(this.formAdd.get('cash_1000')?.value) || 0) * 1000 +
      (Number(this.formAdd.get('cash_500')?.value) || 0) * 500 +
      (Number(this.formAdd.get('cash_100')?.value) || 0) * 100 +
      (Number(this.formAdd.get('cash_50')?.value) || 0) * 50 +
      (Number(this.formAdd.get('cash_20')?.value) || 0) * 20 +
      (Number(this.formAdd.get('cash_10')?.value) || 0) * 10 +
      (Number(this.formAdd.get('cash_5')?.value) || 0) * 5 +
      (Number(this.formAdd.get('cash_2')?.value) || 0) * 2 +
      (Number(this.formAdd.get('cash_1')?.value) || 0) * 1;

    const expectedAmount = Number(this.formAdd.get('expected_amount')?.value) || 0;
    const diffAmount = actualAmount - expectedAmount;

    this.formAdd.patchValue({
      actual_amount: actualAmount,
      diff_amount: diffAmount,
    }, { emitEvent: false });
  }

  changePriceEdit() {
    const actualAmount =
      (Number(this.formEdit.get('cash_1000')?.value) || 0) * 1000 +
      (Number(this.formEdit.get('cash_500')?.value) || 0) * 500 +
      (Number(this.formEdit.get('cash_100')?.value) || 0) * 100 +
      (Number(this.formEdit.get('cash_50')?.value) || 0) * 50 +
      (Number(this.formEdit.get('cash_20')?.value) || 0) * 20 +
      (Number(this.formEdit.get('cash_10')?.value) || 0) * 10 +
      (Number(this.formEdit.get('cash_5')?.value) || 0) * 5 +
      (Number(this.formEdit.get('cash_2')?.value) || 0) * 2 +
      (Number(this.formEdit.get('cash_1')?.value) || 0) * 1;

    const expectedAmount = Number(this.formEdit.get('expected_amount')?.value) || 0;
    const diffAmount = actualAmount - expectedAmount;

    this.formEdit.patchValue({
      actual_amount: actualAmount,
      diff_amount: diffAmount,
    }, { emitEvent: false });
  }

  showError(message: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: message });
  }

  showSuccess(message: string) {
    this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: message });
  }
}
