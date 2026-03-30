import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { Subject, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public permissions: string[] = [];

  public displayAdd: boolean = false;
  public displayEdit: boolean = false;

  public urlData: any = {
    product_type_id: '',
    product_brand_id: '',
  };

  @ViewChild('dt') table: Table;
  public loading: boolean;
  public totalRecords: number = 0;
  public search: FormControl = new FormControl('');
  public data: any[];

  public formSetting: FormGroup;
  public formAdd: FormGroup;
  public formEdit: FormGroup;

  public filter_product_types: any = [];
  public filter_product_brands: any = [];
  public product_types: any = [];
  public product_brands: any = [];

  public editId: string;

  constructor(
    private _fb: FormBuilder,
    private _service: ProductService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _messageService: MessageService,
  ) {
    this.permissions = JSON.parse(localStorage.getItem('permissions'));
  }

  ngOnInit() {
    this._route.queryParamMap.subscribe(params => {
      this.urlData.product_type_id = params.get('product_type_id');
      this.urlData.product_brand_id = params.get('product_brand_id');
    });


    this.formSetting = this._fb.group({
      product_type: '',
      product_brand: '',
    });

    this.formAdd = this._fb.group({
      product_type_id: 0,
      product_brand_id: 0,
      code: '',
      name: '',
      description: '',
      upload_image_status: false,
      image: '',
      price: 0,
      pack_count: 0,
      pack_price: 0,
      // prices: this._fb.array([]),
    });

    this.formEdit = this._fb.group({
      product_type_id: 0,
      product_brand_id: 0,
      code: '',
      name: '',
      description: '',
      upload_image_status: false,
      image: '',
      price: 0,
      pack_count: 0,
      pack_price: 0,
      // prices: this._fb.array([]),
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

          this._service.page({ perPage: rows, page: page, search: query, searchId1: this.urlData.product_type_id, searchId2: this.urlData.product_brand_id })
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

    this._service.page({ perPage: event.rows, page, search: this.search.value, searchId1: this.urlData.product_type_id, searchId2: this.urlData.product_brand_id })
      .subscribe((resp: any) => {
        this.data = resp.data;
        this.totalRecords = resp.totalRecords;
        this.loading = false;
      });
  }

  // get prices(): FormArray {
  //   return this.formAdd.get('prices') as FormArray;
  // }

  // get edit_prices(): FormArray {
  //   return this.formEdit.get('prices') as FormArray;
  // }

  // addPrice() {
  //   const itemGroup = this._fb.group({
  //     id: 0,
  //     count: 1,
  //     price: 0,
  //   });
  //   this.prices.push(itemGroup);
  // }

  // removePrice(index: number) {
  //   if (this.prices.length > 1)
  //     this.prices.removeAt(index);
  // }

  // addEditPrice() {
  //   const itemGroup = this._fb.group({
  //     id: 0,
  //     count: 1,
  //     price: 0,
  //   });
  //   this.edit_prices.push(itemGroup);
  // }

  // removeEditPrice(index: number) {
  //   if (this.edit_prices.length > 1)
  //     this.edit_prices.removeAt(index);
  // }

  loadProductTypeFilter() {
    this._service.getProductType()
      .subscribe((resp: any) => {
        this.filter_product_types = resp.data;
        this.product_types = resp.data;
        if (this.urlData.product_type_id != null) {
          const product_type = this.filter_product_types.find(item => item.id == this.urlData.product_type_id);
          this.formSetting.patchValue({ product_type: product_type });
        }

        if (this.urlData.product_type_id != null) {
          this.loadProductBrandFilter(this.urlData.product_brand_id);
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

    this.loadProductBrandFilter(this.urlData.product_type_id);
  }

  loadProductBrandFilter(id: any) {
    this._service.getProductBrand(id)
      .subscribe((resp: any) => {
        this.filter_product_brands = resp.data;
        if (this.urlData.product_brand_id != null) {
          const product_brand = this.filter_product_brands.find(item => item.id == this.urlData.product_brand_id);
          this.formSetting.patchValue({ product_brand: product_brand });
        }
      });
  }

  selectProductBrandFilter() {
    this.urlData.product_brand_id = this.formSetting.get('product_brand').value.id;
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { product_brand_id: this.formSetting.get('product_brand').value.id },
      queryParamsHandling: 'merge',
    });
    this.table.reset();
  }

  selectProductType(id: any) {
    this._service.getProductBrand(id)
      .subscribe((resp: any) => {
        this.product_brands = resp.data;
      });
  }


  openAdd() {
    this.formAdd = this._fb.group({
      product_type_id: 0,
      product_brand_id: 0,
      code: '',
      name: '',
      upload_image_status: false,
      image: '',
      price: 0,
      pack_count: 0,
      pack_price: 0,
      // prices: this._fb.array([]),
    });
    // this.addPrice();
    this.displayAdd = true
  }

  addConfirm() {
    this._service.addProduct(this.formAdd.value).subscribe({
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
      product_type_id: 0,
      product_brand_id: 0,
      code: '',
      name: '',
      description: '',
      upload_image_status: false,
      image: '',
      price: 0,
      pack_count: 0,
      pack_price: 0,
      // prices: this._fb.array([]),
    });
    this._service.getProduct(this.editId)
      .subscribe({
        next: (resp: any) => {
          this.formEdit.patchValue({
            ...resp.data
          })

          // this.edit_prices.clear();
          // if (resp.data.prices != null) {
          //   for (let price of resp.data.prices) {
          //     const itemGroup = this._fb.group({
          //       id: [price.id],
          //       count: [price.count],
          //       price: [price.price],
          //     });

          //     this.edit_prices.push(itemGroup);
          //   };
          // }
          this.selectProductType(this.formEdit.value.product_type_id);
          this.displayEdit = true;
        },
        error: (err) => {
          this.showError(err?.error?.message ?? 'ไม่สามารถโหลดข้อมูลแก้ไขได้');
        },
      });
  }

  confirmEdit() {
    this._service.updateProduct(this.editId, this.formEdit.value).subscribe({
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
