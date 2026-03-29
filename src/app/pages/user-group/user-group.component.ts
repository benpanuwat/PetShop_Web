import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { Subject, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { MessageService } from 'primeng/api';
import { UserGroupService } from '../user-group/user-group.service';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent {
  public permissions: string[] = [];
  
  public displayAdd: boolean = false;
  public displayEdit: boolean = false;
  public displayDelete: boolean = false;

  @ViewChild('dt') table: Table;
  public loading: boolean;
  public totalRecords: number = 0;
  public search: FormControl = new FormControl('');
  public data: any[];

  public formAdd: FormGroup;
  public formEdit: FormGroup;

  public editId: string;
  public deleteId: string;

  constructor(
    private _fb: FormBuilder,
    private _service: UserGroupService,
    private _messageService: MessageService,
  ) { this.permissions = JSON.parse(localStorage.getItem('permissions')); }

  ngOnInit() {

    this.formAdd = this._fb.group({
      name: [null, Validators.required],
      view_user: 0,
      manag_user: 0,
      view_user_group: 0,
      manag_user_group: 0,
    });

    this.formEdit = this._fb.group({
      name: [null, Validators.required],
      view_user: 0,
      manag_user: 0,
      view_user_group: 0,
      manag_user_group: 0,
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

    this._service.page({ perPage: event.rows, page, search: this.search.value })
      .subscribe((resp: any) => {
        this.data = resp.data;
        this.totalRecords = resp.totalRecords;
        this.loading = false;
      });
  }

  openAdd() {
    this.formAdd.reset();
    this.formAdd = this._fb.group({
      name: "",
      view_user: 0,
      manag_user: 0,
      view_user_group: 0,
      manag_user_group: 0,
    });
    this.displayAdd = true
  }

  confirmAdd() {
    this._service.addUserGroup(this.formAdd.value).subscribe({
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
    this._service.getUserGroup(this.editId)
      .subscribe((resp: any) => {
        this.formEdit.patchValue({
          ...resp.data
        })
        this.displayEdit = true;
      });
  }

  confirmEdit() {
    this._service.updateUserGroup(this.editId, this.formEdit.value).subscribe({
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
    this._service.deleteUserGroup(this.deleteId, {}).subscribe({
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
