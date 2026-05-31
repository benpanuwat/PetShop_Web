import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { Subject, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { StockService } from '../stock/stock.service';
import { ProductService } from '../product/product.service';
import { BrowserMultiFormatReader, IScannerControls } from '@zxing/browser';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent {
  public permissions: any = {};

  public displayAdd: boolean = false;
  public displayEdit: boolean = false;
  public displayEditProduct: boolean = false;
  public displaySupplierPrice: boolean = false;
  public displayScanner: boolean = false;
  public displayLog: boolean = false;
  public displayImagePreview: boolean = false;
  public previewImageSrc: string = '';
  public logProductName: string = '';
  public logData: any[] = [];
  public logLoading: boolean = false;
  public exporting: boolean = false;
  public scannerStatus: string = '';
  private scannerTargetForm: 'search' = 'search';
  private scannerControls: IScannerControls | null = null;

  public urlData: any = {
    product_type_id: '',
    product_brand_id: '',
  };

  @ViewChild('dt') table: Table;
  @ViewChild('scannerVideo') scannerVideoEl: ElementRef<HTMLVideoElement>;
  public loading: boolean;
  public totalRecords: number = 0;
  public search: FormControl = new FormControl('');
  public data: any[];

  public formSetting: FormGroup;
  public formEdit: FormGroup;
  public formEditProduct: FormGroup;

  public filter_product_types: any = [];
  public filter_product_brands: any = [];
  public product_types: any = [];
  public product_brands: any = [];

  public editId: string;
  public editProductId: string;
  public supplierPriceProductId: any;
  public supplierPriceProductName: string = '';
  public supplierPriceRows: { supplier_id: number; supplier_name: string; cost: number }[] = [];
  public suppliers: any[] = [];
  public newSupplierItem: { supplier_id: number; cost: number } = { supplier_id: 0, cost: 0 };

  constructor(
    private _fb: FormBuilder,
    private _service: StockService,
    private _productService: ProductService,
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
    });

    this.formSetting = this._fb.group({
      product_type: '',
      product_brand: '',
    });

    this.formEdit = this._fb.group({
      count: 0,
      alert_count: 0,
      max_count: 0,
    });

    this.formEditProduct = this._fb.group({
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

          this._service.page({ perPage: rows, page, search: query, searchId1: this.urlData.product_type_id, searchId2: this.urlData.product_brand_id })
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
          this.formSetting.patchValue({ product_type });
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
          this.formSetting.patchValue({ product_brand });
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

  exportPurchase() {
    this.exporting = true;
    this._service.getPurchaseExport().subscribe({
      next: (resp: any) => {
        this.exporting = false;
        const data = resp?.data ?? { branches: [], rows: [] };
        if (!data.rows || data.rows.length === 0) {
          this.showError('ไม่มีสินค้าที่ต้องสั่งซื้อเข้าคลัง (ทุกสาขามีของเต็มแล้ว)');
          return;
        }
        this.buildPurchaseExcel(data);
      },
      error: (err) => {
        this.exporting = false;
        this.showError(err?.error?.message ?? 'ไม่สามารถดึงข้อมูลส่งออกได้');
      },
    });
  }

  private buildPurchaseExcel(data: { branches: any[], rows: any[] }) {
    const branches = data.branches ?? [];
    const rows = data.rows ?? [];
    const today = new Date().toLocaleDateString('th-TH');
    const esc = (v: any) => String(v ?? '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const colspan = 4 + branches.length * 3 + 1;
    let html = '<table border="1" cellspacing="0" cellpadding="4">';
    html += `<tr><th colspan="${colspan}" style="font-size:16px;">รายการสั่งซื้อสินค้าเข้าคลัง (${today})</th></tr>`;

    // header row 1: base columns (rowspan) + branch name groups (colspan 3)
    html += '<tr style="background:#e2e8f0;">';
    html += '<th rowspan="2">รหัส</th><th rowspan="2">สินค้า</th>';
    html += '<th rowspan="2">ประเภท</th><th rowspan="2">แบรนด์</th>';
    for (const b of branches) html += `<th colspan="3">${esc(b.name)}</th>`;
    html += '<th rowspan="2">รวมสั่งซื้อ</th></tr>';

    // header row 2: sub columns per branch
    html += '<tr style="background:#f1f5f9;">';
    for (const _ of branches) {
      html += '<th>คงเหลือ</th><th>เก็บได้</th><th>สั่งซื้อ</th>';
    }
    html += '</tr>';

    for (const r of rows) {
      html += '<tr>';
      html += `<td>${esc(r.code)}</td><td>${esc(r.name)}</td>`;
      html += `<td>${esc(r.product_type_name)}</td><td>${esc(r.product_brand_name)}</td>`;
      for (const c of (r.cells ?? [])) {
        html += `<td style="text-align:right;">${c.count || 0}</td>`;
        html += `<td style="text-align:right;">${c.max_count || 0}</td>`;
        html += `<td style="text-align:right; background:#fef9c3;"><b>${c.buy || 0}</b></td>`;
      }
      html += `<td style="text-align:right;"><b>${r.total_buy || 0}</b></td>`;
      html += '</tr>';
    }
    html += '</table>';

    const content = `<html><head><meta charset="UTF-8"></head><body>${html}</body></html>`;
    const blob = new Blob(['﻿' + content], { type: 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ใบสั่งซื้อเข้าคลัง_${today}.xls`;
    a.click();
    URL.revokeObjectURL(url);
  }

  openLog(item: any) {
    this.logProductName = item.name;
    this.logData = [];
    this.logLoading = true;
    this.displayLog = true;
    this._service.getStockLogs(item.id).subscribe({
      next: (resp: any) => {
        this.logData = resp.data;
        this.logLoading = false;
      },
      error: (err) => {
        this.logLoading = false;
        this.showError(err?.error?.message ?? 'โหลด log ไม่สำเร็จ');
      },
    });
  }

  getActionLabel(action: string): string {
    const map: Record<string, string> = {
      order: 'ขาย',
      cancel_order: 'ยกเลิกออเดอร์',
      receive_product: 'รับสินค้า',
      manual: 'แก้ไขด้วยตนเอง',
    };
    return map[action] ?? action;
  }

  openEdit(Id: any) {
    this.editId = Id;
    this.formEdit = this._fb.group({
      count: 0,
      alert_count: 0,
      max_count: 0,
    });
    this._service.getStock(this.editId)
      .subscribe({
        next: (resp: any) => {
          this.formEdit.patchValue({
            ...resp.data
          });
          this.displayEdit = true;
        },
        error: (err) => {
          this.showError(err?.error?.message ?? 'ไม่สามารถโหลดข้อมูลแก้ไขได้');
        },
      });
  }

  confirmEdit() {
    this._service.updateStock(this.editId, this.formEdit.value).subscribe({
      next: (resp: any) => {
        this.displayEdit = false;
        this.showSuccess(resp.message);
        this.table.reset();
      },
      error: (err) => {
        this.showError(err.error.message);
      },
    });
  }

  cancelEdit() {
    this.displayEdit = false;
  }

  openEditProduct(item: any) {
    this.editProductId = item.id;
    this.formEditProduct = this._fb.group({
      product_type_id: 0,
      product_brand_id: 0,
      code: '',
      name: '',
      description: '',
      upload_image_status: false,
      image: '',
      price: 0,
    });
    this._productService.getProduct(this.editProductId).subscribe({
      next: (resp: any) => {
        this.formEditProduct.patchValue({ ...resp.data });
        this._productService.getProductBrand(this.formEditProduct.value.product_type_id)
          .subscribe((r: any) => { this.product_brands = r.data; });
        this.displayEditProduct = true;
      },
      error: (err) => this.showError(err?.error?.message ?? 'ไม่สามารถโหลดข้อมูลสินค้าได้'),
    });
  }

  confirmEditProduct() {
    this._productService.updateProduct(this.editProductId, this.formEditProduct.value).subscribe({
      next: (resp: any) => {
        this.displayEditProduct = false;
        this.showSuccess(resp.message);
        this.table.reset();
      },
      error: (err) => this.showError(err.error.message),
    });
  }

  cancelEditProduct() {
    this.displayEditProduct = false;
  }

  openSupplierPrice(item: any) {
    this.supplierPriceProductId = item.id;
    this.supplierPriceProductName = item.name;
    this.supplierPriceRows = [];
    this.newSupplierItem = { supplier_id: 0, cost: 0 };

    this._productService.getSuppliers().subscribe({
      next: (suppResp: any) => {
        this.suppliers = suppResp.data;
        this._loadSupplierPriceRows();
        this.displaySupplierPrice = true;
      },
      error: (err) => this.showError(err?.error?.message ?? 'โหลดรายชื่อผู้ขายไม่สำเร็จ'),
    });
  }

  private _loadSupplierPriceRows() {
    this._productService.getSupplierPriceLists(this.supplierPriceProductId).subscribe({
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
    this._productService.addSupplierPriceItem(payload).subscribe({
      next: (resp: any) => {
        this.showSuccess(resp.message ?? 'เพิ่มสำเร็จ');
        this.newSupplierItem = { supplier_id: 0, cost: 0 };
        this._loadSupplierPriceRows();
      },
      error: (err) => this.showError(err?.error?.message ?? 'เพิ่มไม่สำเร็จ'),
    });
  }

  openScanner(form: 'search' = 'search') {
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
              if (this.scannerTargetForm === 'search') {
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

  openImagePreview(src: string) {
    this.previewImageSrc = src || 'assets/images/product.png';
    this.displayImagePreview = true;
  }

  showError(massage: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
  }

  showSuccess(massage: string) {
    this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
  }
}
