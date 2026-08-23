import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductProfitService } from './product_profit.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-product_profit',
  templateUrl: './product_profit.component.html',
  styleUrls: ['./product_profit.component.scss']
})
export class ProductProfitComponent {
  public permissions: any = {};

  // เกณฑ์กำไรต่ำ (margin %) -> แสดงสีแดง
  public readonly lowProfitThreshold = 20;

  public readonly profitRangeOptions = [
    { label: 'ทุกช่วงกำไร', value: '' },
    { label: 'น้อยกว่า 20%', value: 'lt20' },
    { label: '20% - 30%', value: '20_30' },
    { label: 'มากกว่า 30%', value: 'gt30' },
  ];
  public profitRange: string = '';

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
  public filter_product_types: any = [];
  public filter_product_brands: any = [];

  // ===== dialog แก้ไขสินค้า =====
  public displayEditProduct: boolean = false;
  public editProductId: any;
  public formEditProduct: FormGroup;
  public product_types: any[] = [];
  public product_brands: any[] = [];

  // ===== dialog ราคาต้นทุน (เหมือนหน้าสินค้า) =====
  public displaySupplierPrice: boolean = false;
  public supplierPriceProductId: any;
  public supplierPriceProductName: string = '';
  public supplierPriceSellPrice: number = 0;
  public supplierPriceRows: { supplier_id: number; supplier_name: string; cost: number; profit_percent: number | null }[] = [];
  public suppliers: any[] = [];
  public newSupplierItem: { supplier_id: number; cost: number } = { supplier_id: 0, cost: 0 };

  // กราฟความเคลื่อนไหวราคาต้นทุน 1 ปีย้อนหลัง (dialog แยก)
  public displayPriceChart: boolean = false;
  public priceChartProductName: string = '';
  public priceChartData: any = null;
  public priceChartOptions: any = null;
  public hasPriceHistory: boolean = false;

  // ===== เลือกหลายรายการ + เพิ่มต้นทุนพร้อมกัน =====
  public selectedProducts: any[] = [];
  public displayBulkCost: boolean = false;
  public bulkSupplierId: number = 0;
  public bulkRows: { product_id: number; code: string; name: string; sell: number; cost: number | null }[] = [];
  public bulkSaving: boolean = false;
  public bulkApplyCost: number | null = null;   // ต้นทุนที่จะนำไปใช้กับทุกช่อง

  // ===== dialog นำเข้า Excel =====
  public displayImport: boolean = false;
  public importSupplierId: number = 0;
  public importEditName: boolean = false;
  public importFileName: string = '';
  public previewRows: any[] = [];
  public importing: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _service: ProductProfitService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _messageService: MessageService,
  ) {
    this.permissions = JSON.parse(localStorage.getItem('permissions') || '{}');
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

    this.search.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((query) => {
          this.loading = true;
          const page = this.table.first / this.table.rows + 1;
          this._service.page({ perPage: this.table.rows, page, search: query, searchId1: this.urlData.product_type_id, searchId2: this.urlData.product_brand_id, profitRange: this.profitRange })
            .subscribe((resp: any) => {
              this.data = resp.data;
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
    this._service.page({ perPage: event.rows, page, search: this.search.value, searchId1: this.urlData.product_type_id, searchId2: this.urlData.product_brand_id, profitRange: this.profitRange })
      .subscribe((resp: any) => {
        this.data = resp.data;
        this.totalRecords = resp.totalRecords;
        this.loading = false;
      });
  }

  selectProfitFilter() {
    this.table.reset();
  }

  loadProductTypeFilter() {
    this._service.getProductType()
      .subscribe((resp: any) => {
        this.filter_product_types = resp.data;
        this.product_types = resp.data;
        if (this.urlData.product_type_id != null) {
          const product_type = this.filter_product_types.find(item => item.id == this.urlData.product_type_id);
          this.formSetting.patchValue({ product_type: product_type });
          this.loadProductBrandFilter(this.urlData.product_type_id);
        }
      });
  }

  selectProductTypeFilter() {
    const selected = this.formSetting.get('product_type').value;
    this.urlData.product_type_id = selected ? selected.id : '';
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { product_type_id: this.urlData.product_type_id },
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
    const selected = this.formSetting.get('product_brand').value;
    this.urlData.product_brand_id = selected ? selected.id : '';
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { product_brand_id: this.urlData.product_brand_id },
      queryParamsHandling: 'merge',
    });
    this.table.reset();
  }

  // ===== dialog ราคาต้นทุน =====
  openSupplierPrice(item: any) {
    this.supplierPriceProductId = item.id;
    this.supplierPriceProductName = item.name;
    this.supplierPriceSellPrice = Number(item.price) || 0;
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

  // เปิด dialog กราฟราคาต้นทุน (แยกจาก dialog ราคาต้นทุน)
  openPriceChart(item: any) {
    this.priceChartProductName = item.name;
    this.priceChartData = null;
    this.hasPriceHistory = false;
    this.displayPriceChart = true;
    this._service.getSupplierPriceHistory(item.id).subscribe({
      next: (resp: any) => this.buildPriceChart(resp?.data ?? []),
      error: () => { this.priceChartData = null; this.hasPriceHistory = false; },
    });
  }

  // สร้างกราฟเส้นรายเดือน 12 เดือนล่าสุด (carry-forward ราคาล่าสุดของแต่ละผู้ขาย)
  private buildPriceChart(records: any[]) {
    if (!records || records.length === 0) {
      this.priceChartData = null;
      this.hasPriceHistory = false;
      return;
    }

    const now = new Date();
    const months: { y: number; m: number; label: string; end: Date }[] = [];
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const mm = (d.getMonth() + 1).toString().padStart(2, '0');
      const yy = d.getFullYear().toString().slice(-2);
      months.push({ y: d.getFullYear(), m: d.getMonth(), label: `${mm}/${yy}`, end: new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59) });
    }
    const labels = months.map(x => x.label);

    const bySupplier = new Map<number, { name: string; recs: { date: Date; cost: number }[] }>();
    for (const r of records) {
      if (!bySupplier.has(r.supplier_id)) bySupplier.set(r.supplier_id, { name: r.supplier_name, recs: [] });
      bySupplier.get(r.supplier_id)!.recs.push({ date: new Date(r.created_date), cost: Number(r.cost) || 0 });
    }

    const palette = ['#6366f1', '#14b8a6', '#f59e0b', '#ef4444', '#0ea5e9', '#a855f7', '#84cc16', '#ec4899'];
    let ci = 0;
    const datasets: any[] = [];
    bySupplier.forEach((info) => {
      info.recs.sort((a, b) => a.date.getTime() - b.date.getTime());
      const data = months.map(mo => {
        let cost: number | null = null;
        for (const rec of info.recs) {
          if (rec.date <= mo.end) cost = rec.cost; else break;
        }
        return cost;
      });
      const color = palette[ci % palette.length];
      ci++;
      datasets.push({
        label: info.name,
        data,
        borderColor: color,
        backgroundColor: color,
        tension: 0.3,
        spanGaps: true,
        pointRadius: 3,
      });
    });

    this.priceChartData = { labels, datasets };
    this.hasPriceHistory = datasets.length > 0;

    // คำนวณช่วงแกน Y ให้มี padding เพื่อให้เห็นการเคลื่อนไหวชัด แม้ราคาจะใกล้เคียงกัน
    const allVals = datasets.flatMap(d => d.data).filter((v: any) => v !== null && v !== undefined) as number[];
    let yMin: number | undefined;
    let yMax: number | undefined;
    if (allVals.length) {
      const mn = Math.min(...allVals);
      const mx = Math.max(...allVals);
      if (mn === mx) {
        const pad = mn === 0 ? 1 : Math.max(1, Math.abs(mn) * 0.2);
        yMin = mn - pad;
        yMax = mx + pad;
      } else {
        const pad = (mx - mn) * 0.2;
        yMin = mn - pad;
        yMax = mx + pad;
      }
      if (yMin < 0) yMin = 0;
    }

    this.priceChartOptions = {
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 14 } },
        tooltip: {
          callbacks: {
            label: (ctx: any) => `${ctx.dataset.label}: ${Number(ctx.parsed.y).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} บาท`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          min: yMin,
          max: yMax,
          ticks: { callback: (v: any) => Number(v).toLocaleString() },
          title: { display: true, text: 'ราคาต้นทุน (บาท)' },
        },
        x: { grid: { display: false } },
      },
    };
  }

  private loadSupplierPriceRows() {
    this._service.getSupplierPriceLists(this.supplierPriceProductId).subscribe({
      next: (priceResp: any) => {
        const rows: any[] = priceResp.data ?? [];
        const sell = this.supplierPriceSellPrice;
        this.supplierPriceRows = rows.map(e => ({
          supplier_id: e.supplier_id,
          supplier_name: e.supplier_name ?? (this.suppliers.find(s => s.id === e.supplier_id)?.name ?? ''),
          cost: e.cost,
          profit_percent: (sell > 0 && e.cost != null) ? Math.round((sell - e.cost) / sell * 100 * 100) / 100 : null,
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
        this.reloadTable();        // อัปเดตกำไรในตารางหลัง
      },
      error: (err) => this.showError(err?.error?.message ?? 'เพิ่มไม่สำเร็จ'),
    });
  }

  private reloadTable() {
    if (!this.table) return;
    this.loadTable({ first: this.table.first, rows: this.table.rows } as LazyLoadEvent);
  }

  // ===== เพิ่มต้นทุนหลายรายการพร้อมกัน =====
  openBulkCost() {
    if (!this.selectedProducts || this.selectedProducts.length === 0) {
      this.showError('กรุณาเลือกสินค้าอย่างน้อย 1 รายการ');
      return;
    }
    this.bulkSupplierId = 0;
    this.bulkApplyCost = null;
    this.bulkRows = this.selectedProducts.map(p => ({
      product_id: p.id,
      code: p.code,
      name: p.name,
      sell: Number(p.price) || 0,
      cost: null,
    }));

    const open = () => { this.displayBulkCost = true; };
    if (!this.suppliers || this.suppliers.length === 0) {
      this._service.getSuppliers().subscribe({
        next: (resp: any) => { this.suppliers = resp.data; open(); },
        error: (err) => this.showError(err?.error?.message ?? 'โหลดรายชื่อผู้ขายไม่สำเร็จ'),
      });
    } else {
      open();
    }
  }

  // ใส่ต้นทุนที่กรอกไว้ด้านบนลงทุกช่องในตาราง
  applyCostToAll() {
    const cost = Number(this.bulkApplyCost);
    if (this.bulkApplyCost === null || this.bulkApplyCost === undefined || isNaN(cost) || cost < 0) {
      this.showError('กรุณากรอกราคาต้นทุนให้ถูกต้อง');
      return;
    }
    this.bulkRows.forEach(r => r.cost = cost);
    this.showSuccess(`ใส่ต้นทุน ${cost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} บาท ให้ ${this.bulkRows.length} รายการแล้ว`);
  }

  // กำไร % สดตามต้นทุนที่กรอก (เทียบราคาขายของสาขาปัจจุบัน)
  bulkProfit(row: { sell: number; cost: number | null }): number | null {
    if (row.cost == null || row.cost <= 0 || row.sell <= 0) return null;
    return Math.round((row.sell - row.cost) / row.sell * 100 * 100) / 100;
  }

  get bulkFilledCount(): number {
    return this.bulkRows.filter(r => r.cost != null && r.cost > 0).length;
  }

  confirmBulkCost() {
    if (!this.bulkSupplierId) { this.showError('กรุณาเลือกผู้ขาย'); return; }
    const items = this.bulkRows
      .filter(r => r.cost != null && r.cost > 0)
      .map(r => ({ product_id: r.product_id, cost: r.cost as number }));
    if (items.length === 0) { this.showError('กรุณากรอกต้นทุนอย่างน้อย 1 รายการ'); return; }

    this.bulkSaving = true;
    this._service.bulkAddSupplierPrice({ supplier_id: this.bulkSupplierId, items }).subscribe({
      next: (resp: any) => {
        this.bulkSaving = false;
        this.displayBulkCost = false;
        this.selectedProducts = [];
        this.showSuccess(resp.message ?? `บันทึกต้นทุน ${items.length} รายการสำเร็จ`);
        this.reloadTable();
      },
      error: (err) => {
        this.bulkSaving = false;
        this.showError(err?.error?.message ?? 'บันทึกไม่สำเร็จ');
      },
    });
  }

  // ===== นำเข้า Excel =====
  get matchedCount(): number { return this.previewRows.filter(r => r.matched).length; }
  get newCount(): number { return this.previewRows.filter(r => !r.matched).length; }

  openImport() {
    this.importSupplierId = 0;
    this.importEditName = false;
    this.importFileName = '';
    this.previewRows = [];
    if (!this.suppliers || this.suppliers.length === 0) {
      this._service.getSuppliers().subscribe({
        next: (resp: any) => { this.suppliers = resp.data; },
      });
    }
    this.displayImport = true;
  }

  onImportFile(event: any) {
    const file: File = event?.target?.files?.[0];
    if (!file) return;
    this.importFileName = file.name;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const wb = XLSX.read(e.target.result, { type: 'array' });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const aoa: any[][] = XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, defval: '' });

      const parsePrice = (v: any) => Math.round((parseFloat(String(v ?? '').replace(/,/g, '')) || 0) * 100) / 100;

      // แถวแรก = หัวตาราง (ข้าม) | คอลัมน์ 1 = barcode, 2 = ชื่อสินค้า, 3 = ต้นทุน
      let rows = aoa.slice(1).map(r => ({
        barcode: String(r?.[0] ?? '').trim(),
        name: String(r?.[1] ?? '').trim(),
        price: parsePrice(r?.[2]),
      })).filter(r => r.barcode !== '');

      if (rows.length === 0) {
        this.previewRows = [];
        this.showError('ไม่พบรายการสินค้าในไฟล์ (คอลัมน์ 1=barcode, 2=ชื่อสินค้า, 3=ต้นทุน)');
        return;
      }

      this._service.importPreview(rows).subscribe({
        next: (resp: any) => { this.previewRows = resp.data ?? []; },
        error: (err) => this.showError(err?.error?.message ?? 'อ่านไฟล์ไม่สำเร็จ'),
      });
    };
    reader.readAsArrayBuffer(file);
    event.target.value = ''; // ให้เลือกไฟล์เดิมซ้ำได้
  }

  confirmImport() {
    if (!this.importSupplierId) { this.showError('กรุณาเลือกผู้ขาย'); return; }
    if (this.previewRows.length === 0) { this.showError('ไม่มีข้อมูลนำเข้า'); return; }

    this.importing = true;
    const rows = this.previewRows.map(r => ({ barcode: r.barcode, name: r.name, price: r.price }));
    this._service.importProducts({ supplier_id: this.importSupplierId, edit_name: this.importEditName, rows }).subscribe({
      next: (resp: any) => {
        this.importing = false;
        this.displayImport = false;
        const d = resp.data || {};
        this.showSuccess(`นำเข้าสำเร็จ: เพิ่มต้นทุน ${d.cost_added || 0} | สร้างใหม่ ${d.created || 0} | แก้ชื่อ ${d.name_updated || 0}${d.skipped ? (' | ข้าม ' + d.skipped) : ''}`);
        this.table.reset();
      },
      error: (err) => {
        this.importing = false;
        this.showError(err?.error?.message ?? 'นำเข้าไม่สำเร็จ');
      },
    });
  }

  downloadTemplate() {
    const ws = XLSX.utils.aoa_to_sheet([
      ['barcode', 'ชื่อสินค้า', 'ราคา'],
      ['8850123456789', 'ตัวอย่างสินค้า', 25],
    ]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'template');
    XLSX.writeFile(wb, 'import_product_template.xlsx');
  }

  // ===== แก้ไขสินค้า =====
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
    this._service.getProduct(this.editProductId).subscribe({
      next: (resp: any) => {
        this.formEditProduct.patchValue({ ...resp.data });
        this._service.getProductBrand(this.formEditProduct.value.product_type_id)
          .subscribe((r: any) => { this.product_brands = r.data; });
        this.displayEditProduct = true;
      },
      error: (err) => this.showError(err?.error?.message ?? 'ไม่สามารถโหลดข้อมูลสินค้าได้'),
    });
  }

  selectProductType(id: any) {
    this._service.getProductBrand(id).subscribe((r: any) => { this.product_brands = r.data; });
  }

  confirmEditProduct() {
    this._service.updateProduct(this.editProductId, this.formEditProduct.value).subscribe({
      next: (resp: any) => {
        this.displayEditProduct = false;
        this.showSuccess(resp.message);
        this.reloadTable();
      },
      error: (err) => this.showError(err?.error?.message ?? 'ไม่สามารถแก้ไขสินค้าได้'),
    });
  }

  cancelEditProduct() {
    this.displayEditProduct = false;
  }

  showError(message: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: message });
  }
  showSuccess(message: string) {
    this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: message });
  }
}
