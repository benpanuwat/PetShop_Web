import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { Subject, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { NewOrderService } from '../new-order/new-order.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent {
  private readonly thaiToEnglishBarcodeMap: Record<string, string> = {
    'ๅ': '1',
    '/': '2',
    '-': '3',
    'ภ': '4',
    'ถ': '5',
    'ุ': '6',
    'ึ': '7',
    'ค': '8',
    'ต': '9',
    'จ': '0',
    'ข': '-',
    'ช': '=',
    'ๆ': 'q',
    'ไ': 'w',
    'ำ': 'e',
    'พ': 'r',
    'ะ': 't',
    'ั': 'y',
    'ี': 'u',
    'ร': 'i',
    'น': 'o',
    'ย': 'p',
    'บ': '[',
    'ล': ']',
    'ฃ': '\\',
    'ฟ': 'a',
    'ห': 's',
    'ก': 'd',
    'ด': 'f',
    'เ': 'g',
    '้': 'h',
    '่': 'j',
    'า': 'k',
    'ส': 'l',
    'ว': ';',
    'ง': '\'',
    'ผ': 'z',
    'ป': 'x',
    'แ': 'c',
    'อ': 'v',
    'ิ': 'b',
    'ื': 'n',
    'ท': 'm',
    'ม': ',',
    'ใ': '.',
    'ฝ': '/',
  };

  @ViewChild('dt') table!: Table;
  public permissions: string[] = [];
  public branch_id: number;
  public branch: any;

  public displayAddMember: boolean = false;
  public displayAddProduct: boolean = false;
  public displayQty: boolean = false;
  public displayPrice = false;
  public displayCashTransfer = false;
  public displayCashReceived = false;

  public disabledAddMember: boolean = true;
  public disabledAddOrder: boolean = false;


  public formSetting: FormGroup;
  public formAddMember: FormGroup;
  public formCart: FormGroup;

  public product_type_groups: any[];
  public product_brand_groups: any[];
  public payment_types: any = []
  public product_groups: any[];
  public product_carts: any[] = [];
  public select_type = "product_type";
  public step = 'select';

  public itemSelect: any = {};
  public _editNumber: string = "";

  constructor(
    private _fb: FormBuilder,
    private _service: NewOrderService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _messageService: MessageService,
  ) {
    this.permissions = JSON.parse(localStorage.getItem('permissions'));
    this.branch_id = Number(localStorage.getItem('branch'));
  }

  ngOnInit() {
    this.formSetting = this._fb.group({
      barcode: "",
    });
    this.formAddMember = this._fb.group({
      name: "",
      phone: "",
      discount: 0,
    });
    this.formCart = this._fb.group({
      code: "",
      created_date: "",
      products: this._fb.array([]),
      member_id: 0,
      member_name: "",
      member_phone: "",
      payment_type: "เงินสด",
      total: 0,
      discount_per: 0,
      discount: 0,
      net_total: 0,
      cash_transfer: 0,
      cash_received: 0,
      cash_return: 0,
      branch_id: this.branch_id,
    });
    this.loadBranch();
    this.loadPaymentType();
    this.loadProduct();
  }

  get products(): FormArray {
    return this.formCart.get('products') as FormArray;
  }

  deleteBracode() {
    this.formSetting = this._fb.group({
      barcode: "",
    });
  }

  loadBranch() {
    this._service.getBranch(this.branch_id)
      .subscribe((resp: any) => {
        this.branch = resp.data;
      });
  }

  loadPaymentType() {
    this._service.getPaymentType()
      .subscribe((resp: any) => {
        this.payment_types = resp.data;
      });
  }

  loadProduct() {
    this._service.getProductTypeGroup()
      .subscribe((resp: any) => {
        this.product_type_groups = resp.data;
      });
  }

  openAddMember() {
    this.formAddMember.reset();
    this.formAddMember = this._fb.group({
      name: "",
      phone: "",
      discount: 0,
    });
    this.displayAddMember = true
    this.disabledAddMember = false;
  }

  confirmAddMember() {
    this.disabledAddMember = true;
    this._service.addMember(this.formAddMember.value).subscribe({
      next: (resp: any) => {

        this._service.getMemberByPhone(this.formAddMember.value.phone).subscribe({
          next: (resp: any) => {
            this.formCart.patchValue({
              member_id: resp.data.id,
              member_name: resp.data.name,
              member_phone: resp.data.phone,
              discount_per: resp.data.discount,
            });
            this.calSum();
          },
          error: (err) => {
            this.showError(err.error.message);
          },
        });


        this.displayAddMember = false
        this.showSuccess(resp.message);
      },
      error: (err) => {
        this.showError(err.error.message);
      },
    });
  }

  cancelAddMember() {
    this.displayAddMember = false
  }


  openAddProduct() {
    this.displayAddProduct = true;
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

  addItem() {
    this.products.push(
      this._fb.group({
        id: 0,
        code: '',
        name: 'อื่นๆ',
        qty: 1,
        price: 0,
        total: 0,
        discount: 0,
        net_total: 0,
      })
    );
    this.calSum();
    setTimeout(() => this.scrollToLastRow(), 100);
    console.log(55);
  }

  selectProduct(selectProduct) {
    if (this.step == 'select') {
      let product_cart = this.formCart.value.products.find(p =>
        p.id === selectProduct.id
      );

      if (!product_cart) {
        this.products.push(
          this._fb.group({
            id: selectProduct.id,
            code: selectProduct.code,
            name: selectProduct.name,
            image: selectProduct.image,
            qty: 1,
            price: selectProduct.price,
            total: selectProduct.price,
            discount: 0,
            net_total: selectProduct.price,
          })
        );

      } else {
        product_cart.qty += 1;
        this.calAmount(product_cart);
      }
      this.calSum();
      setTimeout(() => this.scrollToLastRow(), 100);
    }
  }

  removeProduct(index: number) {
    this.products.removeAt(index);
    this.calSum();
  }


  openPrice(item) {
    this.itemSelect = item;
    this._editNumber = "";
    this.displayPrice = true;
  }

  editPrice(value: string) {
    if (value === 'del') {
      this._editNumber = this._editNumber.slice(0, -1);
      return;
    }

    if (value === 'clear') {
      this._editNumber = '';
      return;
    }
    this._editNumber += value;
  }

  confirmPrice() {
    let number = Number(this._editNumber)
    if (number > 9999)
      number = 9999;

    this.itemSelect.price = number;
    this.calAmount(this.itemSelect);
    this.displayPrice = false;
  }

  cancelPrice() {
    this.displayPrice = false;
  }


  openQty(item) {
    this.itemSelect = item;
    this._editNumber = "";
    this.displayQty = true;
  }

  editQty(value: string) {
    if (value === 'del') {
      this._editNumber = this._editNumber.slice(0, -1);
      return;
    }

    if (value === 'clear') {
      this._editNumber = '';
      return;
    }
    this._editNumber += value;
  }

  confirmQty() {
    let number = Number(this._editNumber)
    if (number > 9999)
      number = 9999;

    this.itemSelect.qty = number;
    this.calAmount(this.itemSelect);
    this.displayQty = false;
  }

  cancelQty() {
    this.displayQty = false;
  }



  editNumber(value: string) {
    if (value === 'del') {
      this._editNumber = this._editNumber.slice(0, -1);
      return;
    }

    if (value === 'clear') {
      this._editNumber = '';
      return;
    }
    this._editNumber += value;
  }



  openCashTransfer() {
    this._editNumber = "";
    this.displayCashTransfer = true;
  }

  confirmCashTransfer() {
    let number = Number(this._editNumber)
    if (number > 9999)
      number = 9999;

    this.formCart.patchValue({
      cash_transfer: number,
    });

    this.displayCashTransfer = false;
  }

  cancelCashTransfer() {
    this.displayCashTransfer = false;
  }


  openCashReceived() {
    this._editNumber = "";
    this.displayCashReceived = true;
  }

  confirmCashReceived() {
    let number = Number(this._editNumber)
    if (number > 9999)
      number = 9999;

    this.formCart.patchValue({
      cash_received: number,
    });

    if (this.formCart.value.payment_type == 'เงินสด') {
      this.formCart.patchValue({
        cash_return: this.formCart.value.cash_received - this.formCart.value.net_total,
      });
    } else if (this.formCart.value.payment_type == 'โอน' || this.formCart.value.payment_type == 'คนละครึ่ง') {
      this.formCart.patchValue({
        cash_return: this.formCart.value.cash_received - (this.formCart.value.net_total - this.formCart.value.cash_transfer),
      });
    }

    this.displayCashReceived = false;
  }

  cancelCashReceived() {
    this.displayCashReceived = false;
  }


  selectPaymentType() {
    if (this.formCart.value.payment_type == 'เงินสด') {
      this.formCart.patchValue({
        cash_received: 0,
        cash_return: this.formCart.value.cash_received - this.formCart.value.net_total,
      });
    }
    else if (this.formCart.value.payment_type == 'โอน' || this.formCart.value.payment_type == 'คนละครึ่ง') {
      this.formCart.patchValue({
        cash_transfer: this.formCart.value.net_total,
        cash_received: 0,
        cash_return: 0,
      });
    }
    else {
      this.formCart.patchValue({
        cash_received: 0,
        cash_return: 0,
      });
    }
  }

  calAmount(product_cart) {
    product_cart.total = product_cart.price * product_cart.qty;
    product_cart.net_total = product_cart.total;
    product_cart.noti_discount = "";
    this.calSum();
  }

  calSum() {
    let total = 0;
    let discount_per = this.formCart.get('discount_per').value;
    for (const product of this.formCart.value.products) {
      total += product.net_total;
    }

    let discount = Math.ceil((total * discount_per) / 100);
    let net_total = total - discount;

    this.formCart.patchValue({
      total: total,
      discount: discount,
      net_total: net_total,
    });
  }

  onEnterBracode() {
    const barcode = this.normalizeBarcode(this.formSetting.value.barcode);
    const product = this.product_type_groups
      .flatMap(t => t.product_brands)
      .flatMap(b => b.products)
      .find(p => this.normalizeBarcode(p.code) === barcode);

    if (product) {
      this.selectProduct(product);
      this.calSum();

      this.formSetting.reset({ barcode: '' });
      setTimeout(() => this.scrollToLastRow(), 100);
    }
    else {
      this.showError("ไม่พบรายการสินค้า");
    }
  }

  private normalizeBarcode(barcode: any): string {
    return String(barcode ?? '')
      .trim()
      .split('')
      .map((char) => this.thaiToEnglishBarcodeMap[char] ?? char)
      .join('')
      .toUpperCase();
  }

  scrollToLastRow() {
    const tableBody = this.table.el.nativeElement.querySelector('.p-datatable-wrapper');
    if (tableBody) {
      tableBody.scrollTop = tableBody.scrollHeight;
      tableBody.scrollLeft = tableBody.scrollWidth;
    }
  }

  onEnterMemberPhone() {
    this._service.getMemberByPhone(this.formCart.value.member_phone).subscribe({
      next: (resp: any) => {
        this.formCart.patchValue({
          member_id: resp.data.id,
          member_name: resp.data.name,
          member_phone: resp.data.phone,
          discount_per: resp.data.discount,
        });
        this.calSum();
        this.showSuccess(resp.message);
      },
      error: (err) => {
        this.showError(err.error.message);
      },
    });
  }

  clearData() {
    this.formCart = this._fb.group({
      code: "",
      created_date: "",
      products: this._fb.array([]),
      member_id: 0,
      member_name: "",
      member_phone: "",
      payment_type: "เงินสด",
      total: 0,
      discount_per: 0,
      discount: 0,
      net_total: 0,
      cash_transfer: 0,
      cash_received: 0,
      cash_return: 0,
      branch_id: this.branch_id,
    });
    this.select_type = "product_type";
  }

  addOrder() {
    if (this.formCart.value.payment_type == 'เงินสด' && this.formCart.value.cash_received == 0) {
      this.showError("กรุณากรอกเงินสดที่ได้รับ");
    } else if (this.formCart.value.payment_type == 'โอน' && (this.formCart.value.cash_transfer + this.formCart.value.cash_received) < this.formCart.value.net_total) {
      this.showError("กรุณากรอกจำนวนเงินให้มากกว่าราคาสินค้า");
    } else if (this.formCart.value.payment_type == 'คนละครึ่ง' && (this.formCart.value.cash_transfer + this.formCart.value.cash_received) < this.formCart.value.net_total) {
      this.showError("กรุณากรอกจำนวนเงินให้มากกว่าราคาสินค้า");
    }
    else {
      this.disabledAddOrder = true;
      this._service.addOrder(this.formCart.value).subscribe({
        next: (resp: any) => {
          this.formCart.patchValue({
            code: resp.data.code,
            created_date: resp.data.created_date,
          });
          this.step = "order";
          this.showSuccess(resp.message);
        },
        error: (err) => {
          this.showError(err.error.message);
          this.disabledAddOrder = false;
        },
      });
    }
  }

  newCreate() {
    this.loadProduct();
    this.clearData();
    this.step = "select";
    this.disabledAddOrder = false;
  }

  printSlip() {
    const printContents = document.getElementById('slip-content')?.innerHTML;
    const popupWin = window.open('', '_blank', 'width=800,height=600');

    if (popupWin) {
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
            <title>ใบเสร็จรับเงิน</title>
          </head>
          <body onload="window.print(); window.close();">
            ${printContents}
          </body>
        </html>
      `);
      popupWin.document.close();
    }
  }

  showError(massage: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
  }
  showSuccess(massage: string) {
    this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
  }

}
