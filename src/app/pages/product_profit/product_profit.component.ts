import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductProfitService } from './product_profit.service';

@Component({
  selector: 'app-product_profit',
  templateUrl: './product_profit.component.html',
  styleUrls: ['./product_profit.component.scss']
})
export class ProductProfitComponent {
  public permissions: any = {};

  // เกณฑ์กำไรต่ำ (margin %) -> แสดงสีแดง
  public readonly lowProfitThreshold = 20;

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

  // ===== dialog ราคาต้นทุน (เหมือนหน้าสินค้า) =====
  public displaySupplierPrice: boolean = false;
  public supplierPriceProductId: any;
  public supplierPriceProductName: string = '';
  public supplierPriceRows: { supplier_id: number; supplier_name: string; cost: number }[] = [];
  public suppliers: any[] = [];
  public newSupplierItem: { supplier_id: number; cost: number } = { supplier_id: 0, cost: 0 };

  // กราฟความเคลื่อนไหวราคาต้นทุน 1 ปีย้อนหลัง (dialog แยก)
  public displayPriceChart: boolean = false;
  public priceChartProductName: string = '';
  public priceChartData: any = null;
  public priceChartOptions: any = null;
  public hasPriceHistory: boolean = false;

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
          this._service.page({ perPage: this.table.rows, page, search: query, searchId1: this.urlData.product_type_id, searchId2: this.urlData.product_brand_id })
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
        this.reloadTable();        // อัปเดตกำไรในตารางหลัง
      },
      error: (err) => this.showError(err?.error?.message ?? 'เพิ่มไม่สำเร็จ'),
    });
  }

  private reloadTable() {
    if (!this.table) return;
    this.loadTable({ first: this.table.first, rows: this.table.rows } as LazyLoadEvent);
  }

  showError(message: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: message });
  }
  showSuccess(message: string) {
    this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: message });
  }
}
