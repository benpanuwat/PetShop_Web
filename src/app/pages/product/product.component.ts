import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { Subject, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductService } from '../product/product.service';
import { BrowserMultiFormatReader, IScannerControls } from '@zxing/browser';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public permissions: any = {};

  public displayAdd: boolean = false;
  public displayEdit: boolean = false;
  public displaySupplierPrice: boolean = false;
  public displayScanner: boolean = false;
  public imageUploadLoadingAdd: boolean = false;
  public imageUploadLoadingEdit: boolean = false;

  public displayCrop: boolean = false;
  public cropImageFile: File | null = null;
  public croppedBlob: Blob | null = null;
  public removeBg: boolean = false;
  private cropTargetForm: 'add' | 'edit' = 'add';
  public scannerStatus: string = '';
  private scannerTargetForm: 'add' | 'edit' | 'search' = 'add';
  private scannerControls: IScannerControls | null = null;

  @ViewChild('scannerVideo') scannerVideoEl: ElementRef<HTMLVideoElement>;

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
  public supplierPriceProductId: any;
  public supplierPriceProductName: string = '';
  public supplierPriceRows: { supplier_id: number; supplier_name: string; cost: number }[] = [];
  public suppliers: any[] = [];
  public newSupplierItem: { supplier_id: number; cost: number } = { supplier_id: 0, cost: 0 };

  constructor(
    private _fb: FormBuilder,
    private _service: ProductService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _messageService: MessageService,
    private _zone: NgZone,
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
      description: '',
      upload_image_status: false,
      image: '',
      price: 0,
    });
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
    });
    this._service.getProduct(this.editId)
      .subscribe({
        next: (resp: any) => {
          this.formEdit.patchValue({
            ...resp.data
          })
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
    if (!input.files?.length) return;
    this.cropTargetForm = 'add';
    this.cropImageFile = input.files[0];
    this.croppedBlob = null;
    this.displayCrop = true;
    input.value = '';
  }

  onSelectImageProfileEdit(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    this.cropTargetForm = 'edit';
    this.cropImageFile = input.files[0];
    this.croppedBlob = null;
    this.displayCrop = true;
    input.value = '';
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedBlob = event.blob ?? null;
  }

  cropCancel() {
    this.displayCrop = false;
    this.cropImageFile = null;
    this.croppedBlob = null;
  }

  async cropConfirm() {
    if (!this.croppedBlob) return;
    const isAdd = this.cropTargetForm === 'add';
    if (isAdd) this.imageUploadLoadingAdd = true;
    else this.imageUploadLoadingEdit = true;

    const sourceBlob = this.croppedBlob;
    this.displayCrop = false;

    let file: File;
    try {
      file = this.removeBg
        ? await this.removeBgToWhiteJpeg(sourceBlob)
        : new File([sourceBlob], 'product.jpg', { type: 'image/jpeg' });
    } catch {
      if (isAdd) this.imageUploadLoadingAdd = false;
      else this.imageUploadLoadingEdit = false;
      this.croppedBlob = null;
      this.showError('ลบพื้นหลังไม่สำเร็จ กรุณาลองใหม่');
      return;
    }

    this._service.uploadImage(file).subscribe({
      next: (resp: any) => {
        if (isAdd) {
          this.formAdd.patchValue({ upload_image_status: true, image: resp.url });
          this.imageUploadLoadingAdd = false;
        } else {
          this.formEdit.patchValue({ upload_image_status: true, image: resp.url });
          this.imageUploadLoadingEdit = false;
        }
        this.croppedBlob = null;
      },
      error: (err) => {
        if (isAdd) this.imageUploadLoadingAdd = false;
        else this.imageUploadLoadingEdit = false;
        this.showError(err?.error?.message ?? 'อัปโหลดรูปภาพไม่สำเร็จ');
        this.croppedBlob = null;
      },
    });
  }

  // ลบพื้นหลังฝั่ง client แล้ววางบนพื้นขาว ส่งออกเป็น JPEG
  private async removeBgToWhiteJpeg(input: Blob): Promise<File> {
    const { removeBackground } = await import('@imgly/background-removal');
    const cutout: Blob = await removeBackground(input);

    const bitmap = await createImageBitmap(cutout);
    const canvas = document.createElement('canvas');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('canvas context unavailable');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bitmap, 0, 0);
    bitmap.close?.();

    const jpegBlob: Blob = await new Promise((resolve, reject) =>
      canvas.toBlob(b => (b ? resolve(b) : reject(new Error('toBlob failed'))), 'image/jpeg', 0.9)
    );
    return new File([jpegBlob], 'product.jpg', { type: 'image/jpeg' });
  }

  openSupplierPrice(item: any) {
    this.supplierPriceProductId = item.id;
    this.supplierPriceProductName = item.name;
    this.supplierPriceRows = [];
    this.newSupplierItem = { supplier_id: 0, cost: 0 };

    this._service.getSuppliers().subscribe({
      next: (suppResp: any) => {
        this.suppliers = suppResp.data;
        this.loadSupplierPriceRows();
        this.displaySupplierPrice = true;
      },
      error: (err) => this.showError(err?.error?.message ?? 'โหลดรายชื่อผู้ขายไม่สำเร็จ'),
    });
  }

  private loadSupplierPriceRows() {
    this._service.getSupplierPriceLists(this.supplierPriceProductId).subscribe({
      next: (priceResp: any) => {
        const rows: any[] = priceResp.data ?? [];
        this.supplierPriceRows = rows.map(e => ({
          supplier_id: e.supplier_id,
          supplier_name: e.supplier_name ?? (this.suppliers.find(s => s.id === e.supplier_id)?.name ?? ''),
          cost: e.cost,
        }));
      },
      error: (err) => this.showError(err?.error?.message ?? 'โหลดราคาต้นทุนไม่สำเร็จ'),
    });
  }

  addSupplierPrice() {
    if (!this.newSupplierItem.supplier_id) return;
    const payload = {
      product_id: this.supplierPriceProductId,
      supplier_id: this.newSupplierItem.supplier_id,
      cost: this.newSupplierItem.cost,
    };
    this._service.addSupplierPriceItem(payload).subscribe({
      next: (resp: any) => {
        this.showSuccess(resp.message ?? 'เพิ่มสำเร็จ');
        this.newSupplierItem = { supplier_id: 0, cost: 0 };
        this.loadSupplierPriceRows();
      },
      error: (err) => this.showError(err?.error?.message ?? 'เพิ่มไม่สำเร็จ'),
    });
  }

  openScanner(form: 'add' | 'edit' | 'search') {
    this.scannerTargetForm = form;
    this.displayScanner = true;
  }

  async startScanner() {
    this.scannerStatus = 'กำลังเปิดกล้อง...';
    const codeReader = new BrowserMultiFormatReader();
    try {
      this.scannerControls = await codeReader.decodeFromVideoDevice(
        undefined,
        this.scannerVideoEl.nativeElement,
        (result, _err) => {
          if (result) {
            this._zone.run(() => {
              const code = result.getText();
              if (this.scannerTargetForm === 'add') {
                this.formAdd.patchValue({ code });
              } else if (this.scannerTargetForm === 'edit') {
                this.formEdit.patchValue({ code });
              } else {
                this.search.setValue(code);
              }
              this.closeScanner();
            });
          } else {
            this.scannerStatus = 'กำลังสแกน...';
          }
        }
      );
    } catch {
      this.scannerStatus = 'ไม่สามารถเข้าถึงกล้องได้ กรุณาอนุญาตการใช้งานกล้อง';
    }
  }

  stopScanner() {
    if (this.scannerControls) {
      this.scannerControls.stop();
      this.scannerControls = null;
    }
  }

  closeScanner() {
    this.stopScanner();
    this.displayScanner = false;
    this.scannerStatus = '';
  }

  showError(massage: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
  }
  showSuccess(massage: string) {
    this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
  }

}
