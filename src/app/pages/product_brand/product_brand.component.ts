import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { Subject, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductBrandService } from '../product_brand/product_brand.service';

@Component({
  selector: 'app-product_brand',
  templateUrl: './product_brand.component.html',
  styleUrls: ['./product_brand.component.scss']
})
export class ProductBrandComponent {
  public permissions: string[] = [];

  public displayAdd: boolean = false;
  public displayEdit: boolean = false;
  public displayDelete: boolean = false;

  public urlData: any = {
    product_type_id: '',
  };

  @ViewChild('dt') table: Table;
  public loading: boolean;
  public totalRecords: number = 0;
  public search: FormControl = new FormControl('');
  public data: any[];

  public filter_product_types: any = [];
  public product_types: any = [];

  public formSetting: FormGroup;
  public formAdd: FormGroup;
  public formEdit: FormGroup;

  public editId: string;
  public deleteId: string;

  constructor(
    private _fb: FormBuilder,
    private _service: ProductBrandService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _messageService: MessageService,
  ) { this.permissions = JSON.parse(localStorage.getItem('permissions')); }

  ngOnInit() {
    this._route.queryParamMap.subscribe(params => {
      this.urlData.product_type_id = params.get('product_type_id');
    });

    this.formSetting = this._fb.group({
      product_type: '',
    });

    this.formAdd = this._fb.group({
      product_type_id: 0,
      name: '',
      upload_image_status: false,
      image: '',
    });

    this.formEdit = this._fb.group({
      product_type_id: 0,
      name: '',
      upload_image_status: false,
      image: '',
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

          this._service.page({ perPage: rows, page: page, search: query, searchId: this.urlData.product_type_id })
            .subscribe((resp: any) => {
              this.data = resp.data;
              this.data = this.data.map((item, index) => ({ ...item, order: index + 1 }));
              this.totalRecords = resp.totalRecords;
              this.loading = false;
            });
        }),
      )
      .subscribe();

    this.loadProductTypeFilter();
  }

  loadTable(event: LazyLoadEvent) {
    this.loading = true;

    const page = event.first / event.rows + 1;

    this._service.page({ perPage: event.rows, page, search: this.search.value, searchId: this.urlData.product_type_id })
      .subscribe((resp: any) => {
        this.data = resp.data;
        this.totalRecords = resp.totalRecords;
        this.loading = false;
      });
  }

  loadProductTypeFilter() {
    this._service.getProductType()
      .subscribe((resp: any) => {
        this.filter_product_types = resp.data;
        this.product_types = resp.data;
        if (this.urlData.product_type_id != null) {
          const product_type = this.filter_product_types.find(item => item.id == this.urlData.product_type_id);
          this.formSetting.patchValue({ product_type: product_type });
        }
      });
  }

  selectProductTypeFilter() {
    this.urlData.product_type_id = this.formSetting.get('product_type').value.id;
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { product_type_id: this.formSetting.get('product_type').value.id },
      queryParamsHandling: 'merge',
    });

    this.table.reset();
  }

  openAdd() {
    this.formAdd = this._fb.group({
      product_type_id: Number(this.urlData.product_type_id),
      name: '',
      upload_image_status: false,
      image: '',
    });
    this.displayAdd = true
  }

  addConfirm() {
    this._service.addProductBrand(this.formAdd.value).subscribe({
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

  addCancel() {
    this.displayAdd = false
  }

  openEdit(Id: any) {
    this.editId = Id
    this.formEdit = this._fb.group({
      product_type_id: '',
      name: '',
      upload_image_status: false,
      image: '',
    });
    this._service.getProductBrand(this.editId)
      .subscribe((resp: any) => {
        this.formEdit.patchValue({
          ...resp.data
        })
        this.displayEdit = true;
      });
  }

  confirmEdit() {
    this._service.updateProductBrand(this.editId, this.formEdit.value).subscribe({
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
    this._service.deleteProductBrand(this.deleteId, {}).subscribe({
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

  onSelectImageProfile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this._service.uploadImage(input.files[0]).subscribe({
        next: (resp: any) => {
          this.formAdd.patchValue({
            upload_image_status: true,
            image: resp.url,
          })
        },
        error: (err) => {
          this.showError(err.error.message);
        },
      });
    }
  }

  onSelectImageProfileEdit(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this._service.uploadImage(input.files[0]).subscribe({
        next: (resp: any) => {
          this.formEdit.patchValue({
            upload_image_status: true,
            image: resp.url,
          })
        },
        error: (err) => {
          this.showError(err.error.message);
        },
      });
    }
  }

  showError(massage: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
  }
  showSuccess(massage: string) {
    this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
  }

}
