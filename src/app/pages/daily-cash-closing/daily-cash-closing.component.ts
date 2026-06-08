import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { DailyCashClosingService } from './daily-cash-closing.service';

@Component({
  selector: 'app-daily-cash-closing',
  templateUrl: './daily-cash-closing.component.html',
  styleUrls: ['./daily-cash-closing.component.scss']
})
export class DailyCashClosingComponent {
  public permissions: any = {};
  public branchId: number = Number(localStorage.getItem('branch')) || 0;

  public readonly denomBanknotes = [
    { label: '1,000 บาท', field: 'cash_1000', value: 1000 },
    { label: '500 บาท',   field: 'cash_500',  value: 500  },
    { label: '100 บาท',   field: 'cash_100',  value: 100  },
    { label: '50 บาท',    field: 'cash_50',   value: 50   },
    { label: '20 บาท',    field: 'cash_20',   value: 20   },
  ];

  public readonly denomCoins = [
    { label: '10 บาท', field: 'cash_10', value: 10 },
    { label: '5 บาท',  field: 'cash_5',  value: 5  },
    { label: '2 บาท',  field: 'cash_2',  value: 2  },
    { label: '1 บาท',  field: 'cash_1',  value: 1  },
  ];

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

  // ===== ดึงเงินออก / เติมเงินเข้า (cash_movements) =====
  public readonly movementTypes = [
    { label: 'เติมเงินเข้า', value: 'in' },
    { label: 'ดึงเงินออก', value: 'out' },
  ];
  @ViewChild('dtm') movementTable: Table;
  public movementLoading = false;
  public movementTotalRecords = 0;
  public movementSearch: FormControl = new FormControl('');
  public movementData: any[] = [];
  public displayMovement = false;
  public formMovement: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _service: DailyCashClosingService,
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService,
  ) {
    this.permissions = JSON.parse(localStorage.getItem('permissions') || '{}');
  }

  ngOnInit() {
    this.formAdd = this._fb.group({
      closing_date: new Date(),
      opening_amount: 0,
      cash_sales: 0,
      cash_in: 0,
      cash_out: 0,
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
      cash_in: 0,
      cash_out: 0,
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

    this.formMovement = this._fb.group({
      type: 'in',
      amount: 0,
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

    this.movementSearch.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((query) => {
          this.movementLoading = true;
          const page = this.movementTable.first / this.movementTable.rows + 1;
          return this._service.pageCashMovement({ perPage: this.movementTable.rows, page, search: query });
        }),
      )
      .subscribe((resp: any) => {
        this.movementData = this.extractRows(resp);
        this.movementTotalRecords = this.extractTotalRecords(resp, this.movementData.length);
        this.movementLoading = false;
      });

    this.search.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((query) => {
          this.loading = true;
          const page = this.table.first / this.table.rows + 1;
          return this._service.page({ perPage: this.table.rows, page, search: query });
        }),
      )
      .subscribe((resp: any) => {
        this.data = this.extractRows(resp).map((item: any, index: number) => ({ ...item, order: index + 1 }));
        this.totalRecords = this.extractTotalRecords(resp, this.data.length);
        this.loading = false;
      });
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
        const cashIn = resp.data.cash_in || 0;
        const cashOut = resp.data.cash_out || 0;
        this.formAdd = this._fb.group({
          opening_amount: resp.data.opening_amount,
          cash_sales: resp.data.cash_sales,
          cash_in: cashIn,
          cash_out: cashOut,
          expected_amount: resp.data.opening_amount + resp.data.cash_sales + cashIn - cashOut,
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

  // ===== ดึงเงินออก / เติมเงินเข้า =====
  loadMovementTable(event: LazyLoadEvent) {
    this.movementLoading = true;
    const page = event.first / event.rows + 1;
    this._service.pageCashMovement({ perPage: event.rows, page, search: this.movementSearch.value })
      .subscribe((resp: any) => {
        this.movementData = this.extractRows(resp);
        this.movementTotalRecords = this.extractTotalRecords(resp, this.movementData.length);
        this.movementLoading = false;
      });
  }

  openMovement() {
    this.formMovement.reset({
      type: 'in',
      amount: 0,
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
    this.displayMovement = true;
  }

  changeMovementPrice() {
    const amount =
      (Number(this.formMovement.get('cash_1000')?.value) || 0) * 1000 +
      (Number(this.formMovement.get('cash_500')?.value) || 0) * 500 +
      (Number(this.formMovement.get('cash_100')?.value) || 0) * 100 +
      (Number(this.formMovement.get('cash_50')?.value) || 0) * 50 +
      (Number(this.formMovement.get('cash_20')?.value) || 0) * 20 +
      (Number(this.formMovement.get('cash_10')?.value) || 0) * 10 +
      (Number(this.formMovement.get('cash_5')?.value) || 0) * 5 +
      (Number(this.formMovement.get('cash_2')?.value) || 0) * 2 +
      (Number(this.formMovement.get('cash_1')?.value) || 0) * 1;

    this.formMovement.patchValue({ amount }, { emitEvent: false });
  }

  addMovementConfirm() {
    if ((Number(this.formMovement.get('amount')?.value) || 0) <= 0) {
      this.showError('กรุณาระบุจำนวนเงิน');
      return;
    }
    this._service.addCashMovement(this.formMovement.value).subscribe({
      next: (resp: any) => {
        this.displayMovement = false;
        this.showSuccess(resp.message);
        this.movementTable.reset();
      },
      error: (err) => {
        this.showError(err.error?.message || 'ไม่สามารถบันทึกข้อมูลได้');
      },
    });
  }

  addMovementCancel() {
    this.displayMovement = false;
  }

  deleteMovement(item: any) {
    this._confirmationService.confirm({
      message: 'ต้องการลบรายการนี้หรือไม่?',
      header: 'ยืนยันการลบ',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'ลบ',
      rejectLabel: 'ยกเลิก',
      accept: () => {
        this._service.deleteCashMovement(item.id).subscribe({
          next: (resp: any) => {
            this.showSuccess(resp.message);
            this.movementTable.reset();
          },
          error: (err) => {
            this.showError(err.error?.message || 'ไม่สามารถลบข้อมูลได้');
          },
        });
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
