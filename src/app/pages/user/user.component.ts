import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { Subject, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { MessageService } from 'primeng/api';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public permissions: string[] = [];

  public displayAdd: boolean = false;
  public displayEdit: boolean = false;
  public displayResetPass: boolean = false;
  public displayDelete: boolean = false;

  @ViewChild('dt') table: Table;
  public loading: boolean;
  public totalRecords: number = 0;
  public search: FormControl = new FormControl('');
  public data: any[];

  public formAdd: FormGroup;
  public formEdit: FormGroup;
  public formResetPass: FormGroup;

  public editId: string;
  public resetPassId: string;
  public deleteId: string;

  public genders = [
    { name: 'ชาย', value: 'M' },
    { name: 'หญิง', value: 'F' },
  ];

  public userGroups: any = [];

  constructor(
    private _fb: FormBuilder,
    private _service: UserService,
    private _messageService: MessageService,
  ) { this.permissions = JSON.parse(localStorage.getItem('permissions')); }

  ngOnInit() {

    this.formAdd = this._fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      confirm_password: [null, Validators.required],
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      gender: [null, Validators.required],
      user_group_id: [0, Validators.required],
    });

    this.formEdit = this._fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      gender: [null, Validators.required],
      user_group_id: [0, Validators.required],
    });

    this.formResetPass = this._fb.group({
      password: [null, Validators.required],
      confirm_password: [null, Validators.required],
    });

    this.loadUserGroup();

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

  loadUserGroup() {
    this._service.getUserGroupList()
      .subscribe((resp: any) => {
        this.userGroups = resp.data;
      });
  }

  openAdd() {
    this.formAdd.reset();
    this.formAdd = this._fb.group({
      username: "",
      password: "",
      confirm_password: "",
      first_name: "",
      last_name: "",
      gender: "",
      user_group_id: 0,
    });
    this.displayAdd = true
  }

  confirmAdd() {
    this._service.addUser(this.formAdd.value).subscribe({
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
      first_name: "",
      last_name: "",
      gender: "",
      user_group_id: 0,
    });
    this._service.getUser(this.editId)
      .subscribe((resp: any) => {
        this.formEdit.patchValue({
          ...resp.data
        })
        this.displayEdit = true;
      });
  }

  confirmEdit() {
    this._service.updateUser(this.editId, this.formEdit.value).subscribe({
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

  openResetPass(Id: any) {
    this.resetPassId = Id
    this.formResetPass.reset();
    this.formResetPass = this._fb.group({
      password: "",
      confirm_password: "",
    });
    this.displayResetPass = true
  }

  confirmResetPass() {
    this._service.updateUserPass(this.resetPassId, this.formResetPass.value).subscribe({
      next: (resp: any) => {
        this.displayResetPass = false
        this.showSuccess(resp.message);
      },
      error: (err) => {
        this.showError(err.error.message);
      },
    });
  }

  cancelResetPass() {
    this.displayResetPass = false
  }

  openDelete(Id: any) {
    this.deleteId = Id
    this.displayDelete = true
  }

  confirmDelete() {
    this._service.deleteUser(this.deleteId, {}).subscribe({
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
