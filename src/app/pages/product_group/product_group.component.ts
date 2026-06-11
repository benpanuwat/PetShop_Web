import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ProductGroupService } from './product_group.service';

@Component({
  selector: 'app-product_group',
  templateUrl: './product_group.component.html',
  styleUrls: ['./product_group.component.scss']
})
export class ProductGroupComponent {
  public permissions: any = {};

  public displayAdd: boolean = false;
  public displayEdit: boolean = false;
  public displayDelete: boolean = false;

  public readonly discountTypeOptions = [
    { label: 'บาท / ชิ้น', value: 'amount' },
    { label: '% / ชิ้น', value: 'percent' },
  ];

  public allProducts: any[] = [];
  public productSearch: string = '';

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
    private _service: ProductGroupService,
    private _messageService: MessageService,
  ) { this.permissions = JSON.parse(localStorage.getItem('permissions') || '{}'); }

  ngOnInit() {
    this.formAdd = this.buildForm();
    this.formEdit = this.buildForm();
    this.loadProducts();

    this.search.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((query) => {
          this.loading = true;
          const page = this.table.first / this.table.rows + 1;
          this._service.page({ perPage: this.table.rows, page, search: query })
            .subscribe((resp: any) => {
              this.data = resp.data;
              this.totalRecords = resp.totalRecords;
              this.loading = false;
            });
        }),
      )
      .subscribe();
  }

  buildForm(): FormGroup {
    return this._fb.group({
      name: '',
      min_qty: 1,
      discount_type: 'amount',
      discount_value: 0,
      product_ids: [[]],
    });
  }

  loadProducts() {
    this._service.getProducts().subscribe((resp: any) => {
      const flat: any[] = [];
      (resp?.data || []).forEach((t: any) =>
        (t.product_brands || []).forEach((b: any) =>
          (b.products || []).forEach((p: any) =>
            flat.push({ id: p.id, code: p.code, name: p.name, price: p.price, label: `${p.name} (${p.code})` })
          )));
      const seen = new Set<number>();
      this.allProducts = flat.filter(p => (seen.has(p.id) ? false : (seen.add(p.id), true)));
    });
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

  get filteredProducts(): any[] {
    const q = (this.productSearch || '').trim().toLowerCase();
    if (!q) return this.allProducts;
    return this.allProducts.filter(p =>
      (p.name || '').toLowerCase().includes(q) || (p.code || '').toLowerCase().includes(q));
  }

  isSelected(form: FormGroup, id: number): boolean {
    const ids: number[] = form.get('product_ids')?.value || [];
    return ids.includes(id);
  }

  toggleProduct(form: FormGroup, id: number) {
    const ids: number[] = [...(form.get('product_ids')?.value || [])];
    const i = ids.indexOf(id);
    if (i === -1) ids.push(id); else ids.splice(i, 1);
    form.patchValue({ product_ids: ids });
  }

  toggleAllFiltered(form: FormGroup) {
    const filtered = this.filteredProducts.map(p => p.id);
    const ids: number[] = [...(form.get('product_ids')?.value || [])];
    const allSelected = filtered.length > 0 && filtered.every(id => ids.includes(id));
    let next: number[];
    if (allSelected) {
      next = ids.filter(id => !filtered.includes(id));        // เอาออกเฉพาะที่กรองอยู่
    } else {
      next = Array.from(new Set([...ids, ...filtered]));      // เพิ่มที่กรองอยู่ทั้งหมด
    }
    form.patchValue({ product_ids: next });
  }

  isAllFilteredSelected(form: FormGroup): boolean {
    const filtered = this.filteredProducts.map(p => p.id);
    const ids: number[] = form.get('product_ids')?.value || [];
    return filtered.length > 0 && filtered.every(id => ids.includes(id));
  }

  discountText(item: any): string {
    if (item.discount_type === 'percent') return `${item.discount_value}% / ชิ้น`;
    return `${item.discount_value} บาท / ชิ้น`;
  }

  openAdd() {
    this.productSearch = '';
    this.formAdd = this.buildForm();
    this.displayAdd = true;
  }

  addConfirm() {
    this._service.addProductGroup(this.formAdd.value).subscribe({
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

  openEdit(Id: any) {
    this.productSearch = '';
    this.editId = Id;
    this.formEdit = this.buildForm();
    this._service.getProductGroup(this.editId)
      .subscribe((resp: any) => {
        this.formEdit.patchValue({ ...resp.data });
        this.displayEdit = true;
      });
  }

  confirmEdit() {
    this._service.updateProductGroup(this.editId, this.formEdit.value).subscribe({
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

  openDelete(Id: any) {
    this.deleteId = Id;
    this.displayDelete = true;
  }

  confirmDelete() {
    this._service.deleteProductGroup(this.deleteId, {}).subscribe({
      next: (resp: any) => {
        this.displayDelete = false;
        this.showSuccess(resp.message);
        this.table.reset();
      },
      error: (err) => {
        this.showError(err.error?.message || 'ไม่สามารถลบข้อมูลได้');
      },
    });
  }

  cancelDelete() {
    this.displayDelete = false;
  }

  showError(message: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: message });
  }
  showSuccess(message: string) {
    this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: message });
  }
}
