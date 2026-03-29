import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ReceiveProductService } from '../receive-product/receive-product.service';

@Component({
  selector: 'app-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.scss']
})
export class ReceiveProductComponent {
  public permissions: string[] = [];

  public displayAdd: boolean = false;

  public formProductLot: FormGroup;

  public product_type_groups: any[];
  public product_brand_groups: any[];
  public product_groups: any[];
  public product_carts: any[] = [];
  public select_type = "product_type";

  constructor(
    private _fb: FormBuilder,
    private _service: ReceiveProductService,
    private _messageService: MessageService,
  ) { this.permissions = JSON.parse(localStorage.getItem('permissions')); }

  ngOnInit() {
    this.formProductLot = this._fb.group({
      name: "",
      products: this._fb.array([]),
    });
    this.loadProduct();
  }

  get products(): FormArray {
    return this.formProductLot.get('products') as FormArray;
  }

  loadProduct() {
    this._service.getProductTypeGroup()
      .subscribe((resp: any) => {
        this.product_type_groups = resp.data;
      });
  }

  openAdd() {
    this.displayAdd = true;
  }

  selectProductType(selectProductType) {
    this.select_type = "product_brand";
    this.product_brand_groups = selectProductType.product_brands;
  }

  backToProductType() {
    this.select_type = "product_type";
  }

  selectProductBrand(selectProductBrand) {
    this.select_type = "product";
    this.product_groups = selectProductBrand.products;
  }

  backToProductBrand() {
    this.select_type = "product_brand";
  }

  selectProduct(selectProduct) {
    this.products.push(
      this._fb.group({
        id: selectProduct.id,
        code: selectProduct.code,
        name: selectProduct.name,
        qty: 1,
        cost_unit: 0,
        cost_total: 0,
        expiry_date: null,
      })
    );
  }

  removeProduct(index: number) {
    this.products.removeAt(index);
  }

  calCostUnit(product) {
    product.cost_unit = Number(product.cost_unit);
    product.qty = Number(product.qty);

    if (!isNaN(product.cost_unit) && !isNaN(product.qty)) {
      product.cost_total = product.cost_unit * product.qty;
    } else {
      product.cost_total = 0;
    }
  }

  calCostTotal(product) {
    const costTotal = parseFloat(product.cost_total);
    const qty = parseFloat(product.qty);

    if (!isNaN(costTotal) && !isNaN(qty) && qty !== 0) {
      product.cost_unit = Math.ceil(costTotal / qty);
    } else {
      product.cost_unit = 0;
    }

  }


  clearData() {
    this.formProductLot = this._fb.group({
      name: "",
      products: this._fb.array([]),
    });
  }

  addProductLot() {
    this._service.addProductLot(this.formProductLot.value).subscribe({
      next: (resp: any) => {
        window.location.reload();
        this.showSuccess(resp.message);
      },
      error: (err) => {
        this.showError(err.error.message);
      },
    });
  }

  showError(massage: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
  }
  showSuccess(massage: string) {
    this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
  }

}
