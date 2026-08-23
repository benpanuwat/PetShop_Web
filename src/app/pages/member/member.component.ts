import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { Subject, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { MessageService } from 'primeng/api';
import { MemberService } from '../member/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {
  public permissions: any = {};

  public displayAdd: boolean = false;
  public displayEdit: boolean = false;
  public displayResetPass: boolean = false;
  public displayDelete: boolean = false;

  public disabledAddMember: boolean = true;

  @ViewChild('dt') table: Table;
  public loading: boolean;
  public totalRecords: number = 0;
  public search: FormControl = new FormControl('');
  public data: any[];

  public formAdd: FormGroup;
  public formEdit: FormGroup;

  public editId: string;
  public deleteId: string;


  public userGroups: any = [];

  // ===== ตัวกรองระดับสมาชิก =====
  public tiers: any[] = [];
  public selectedTier: number = 0;

  constructor(
    private _fb: FormBuilder,
    private _service: MemberService,
    private _messageService: MessageService,
  ) { this.permissions = JSON.parse(localStorage.getItem('permissions')); }

  ngOnInit() {

    this.formAdd = this._fb.group({
      name: "",
      phone: "",
      discount: 0,
    });

    this.formEdit = this._fb.group({
      name: "",
      phone: "",
      discount: 0,
    });

    this.loadTiers();

    this.search.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((query) => {
          this.loading = true;

          const first = this.table.first;
          const rows = this.table.rows;

          const page = first / rows + 1;

          this._service.page({ perPage: rows, page: page, search: query, tier_level: this.selectedTier })
            .subscribe((resp: any) => {
              this.data = resp.data;
              this.data = this.data.map((item, index) => ({ ...item, order: index + 1 }));
              this.totalRecords = resp.totalRecords;
              this.loading = false;
            });
        }),
      )
      .subscribe();
  }

  loadTable(event: LazyLoadEvent) {
    this.loading = true;

    const page = event.first / event.rows + 1;

    this._service.page({ perPage: event.rows, page, search: this.search.value, tier_level: this.selectedTier })
      .subscribe((resp: any) => {
        this.data = resp.data;
        this.totalRecords = resp.totalRecords;
        this.loading = false;
      });
  }

  loadTiers() {
    this._service.getTierList().subscribe({
      next: (resp: any) => {
        this.tiers = [{ level: 0, name: 'ทุกระดับ' }, ...(resp.data ?? [])];
      },
      error: (err) => this.showError(err?.error?.message ?? 'โหลดระดับสมาชิกไม่สำเร็จ'),
    });
  }

  selectTier() {
    this.table.reset();
  }

  openAdd() {
    this.formAdd.reset();
    this.formAdd = this._fb.group({
      name: "",
      phone: "",
      discount: 0,
    });
    this.displayAdd = true
    this.disabledAddMember = false;
  }

  confirmAdd() {
    this.disabledAddMember = true;
    this._service.addMember(this.formAdd.value).subscribe({
      next: (resp: any) => {
        this.displayAdd = false
        this.showSuccess(resp.message);
        this.table.reset();
      },
      error: (err) => {
        this.showError(err.error.message);
      },
    });
  }

  cancelAdd() {
    this.displayAdd = false
  }

  openEdit(Id: any) {
    this.editId = Id
    this.formEdit.reset();
    this.formEdit = this._fb.group({
      name: "",
      phone: "",
      discount: 0,
    });
    this._service.getMember(this.editId)
      .subscribe((resp: any) => {
        this.formEdit.patchValue({
          ...resp.data
        })
        this.displayEdit = true;
      });
  }

  confirmEdit() {
    this._service.updateMember(this.editId, this.formEdit.value).subscribe({
      next: (resp: any) => {
        this.displayEdit = false
        this.showSuccess(resp.message);
        this.table.reset();
      },
      error: (err) => {
        this.showError(err.error.message);
      },
    });
  }

  cancelEdit() {
    this.displayEdit = false
  }

  openDelete(Id: any) {
    this.deleteId = Id
    this.displayDelete = true
  }

  confirmDelete() {
    this._service.deleteMember(this.deleteId, {}).subscribe({
      next: (resp: any) => {
        this.displayDelete = false
        this.showSuccess(resp.message);
        this.table.reset();
      },
      error: (err) => {
        this.showError(err.error.message);
      },
    });
  }

  cancelDelete() {
    this.displayDelete = false
  }

  showError(massage: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
  }
  showSuccess(massage: string) {
    this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
  }

}
