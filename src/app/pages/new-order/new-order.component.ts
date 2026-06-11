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
  public displayClearConfirm = false;
  public displayImagePreview = false;
  public previewImageSrc = '';

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

  public flashRowId: any = null;
  public barcodeAlert: string = '';
  public giftMode: boolean = false;
  public productGroups: any[] = [];
  public promoDiscountTotal: number = 0;
  private _flashTimer: any;
  private _barcodeAlertTimer: any;

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
    this.loadProductGroups();
  }

  get products(): FormArray {
    return this.formCart.get('products') as FormArray;
  }

  get totalQty(): number {
    return (this.formCart.value.products as any[]).reduce((sum, p) => sum + (p.qty || 0), 0);
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

  loadProductGroups() {
    this._service.getProductGroups()
      .subscribe((resp: any) => {
        this.productGroups = resp?.data ?? [];
      });
  }

  // คำนวณส่วนลดโปรโมชั่นจากกลุ่มสินค้า: ครบขั้นต่ำ -> ลดทุกชิ้นในกลุ่ม
  // สินค้าอยู่ได้หลายกลุ่ม -> ใช้ส่วนลด/ชิ้นที่มากที่สุด (ไม่ซ้อนกัน)
  applyGroupDiscounts() {
    this.promoDiscountTotal = 0;
    const controls = this.products.controls;

    // 1) รีเซ็ตบรรทัดที่ไม่ใช่ของแถมกลับเป็นราคาเต็ม
    controls.forEach((ctrl: any) => {
      const v = ctrl.value;
      if (v.is_free) return;
      const base = (Number(v.price) || 0) * (Number(v.qty) || 0);
      ctrl.patchValue({ discount: 0, net_total: base, noti_discount: '' }, { emitEvent: false });
    });

    if (!this.productGroups || this.productGroups.length === 0) return;

    // 2) หาส่วนลด/ชิ้นที่ดีที่สุดของแต่ละบรรทัด
    const bestPerPiece: { [index: number]: number } = {};
    for (const group of this.productGroups) {
      const ids: number[] = group.product_ids || [];
      if (!ids.length) continue;

      let sumQty = 0;
      controls.forEach((ctrl: any) => {
        const v = ctrl.value;
        if (!v.is_free && ids.includes(v.id)) sumQty += Number(v.qty) || 0;
      });
      if (sumQty < (Number(group.min_qty) || 0)) continue;

      controls.forEach((ctrl: any, idx: number) => {
        const v = ctrl.value;
        if (v.is_free || !ids.includes(v.id)) return;
        const price = Number(v.price) || 0;
        let perPiece = group.discount_type === 'percent'
          ? Math.round((price * (Number(group.discount_value) || 0) / 100) * 100) / 100
          : (Number(group.discount_value) || 0);
        if (perPiece > price) perPiece = price;
        if (perPiece > (bestPerPiece[idx] || 0)) bestPerPiece[idx] = perPiece;
      });
    }

    // 3) ใส่ส่วนลดลงบรรทัด
    controls.forEach((ctrl: any, idx: number) => {
      const perPiece = bestPerPiece[idx];
      if (!perPiece || perPiece <= 0) return;
      const v = ctrl.value;
      const qty = Number(v.qty) || 0;
      const price = Number(v.price) || 0;
      const discount = Math.round(perPiece * qty * 100) / 100;
      const net = Math.max(0, price * qty - discount);
      this.promoDiscountTotal += discount;
      ctrl.patchValue({
        discount: discount,
        net_total: net,
        noti_discount: `โปรโมชั่น -${perPiece}/ชิ้น`,
      }, { emitEvent: false });
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
        name: '',
        qty: 1,
        price: 0,
        total: 0,
        discount: 0,
        net_total: 0,
        is_free: false,
        noti_discount: '',
      })
    );
    this.calSum();
    this.flashRow(0);
    this.scrollToRow(this.products.length - 1);
  }

  toggleGiftMode() {
    this.giftMode = !this.giftMode;
  }

  openGiftPicker() {
    this.giftMode = true;
    this.displayAddProduct = true;
  }

  private flashRow(id: any) {
    clearTimeout(this._flashTimer);
    this.flashRowId = id;
    this._flashTimer = setTimeout(() => { this.flashRowId = null; }, 900);
  }

  selectProduct(selectProduct) {
    if (this.step == 'select') {
      // โหมดของแถม: เพิ่มเป็นบรรทัดใหม่เสมอ ราคา 0 + ติดธง is_free (ไม่ merge กับสินค้าที่มีอยู่)
      if (this.giftMode) {
        this.products.push(
          this._fb.group({
            id: selectProduct.id,
            code: selectProduct.code,
            name: selectProduct.name,
            image: selectProduct.image,
            qty: 1,
            price: 0,
            total: 0,
            discount: 0,
            net_total: 0,
            is_free: true,
            noti_discount: '',
          })
        );
        this.calSum();
        this.flashRow(selectProduct.id);
        this.scrollToRow(this.products.length - 1);
        return;
      }

      const idx = this.products.controls.findIndex(c => c.value.id === selectProduct.id && !c.value.is_free);
      let targetIndex: number;

      if (idx === -1) {
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
            is_free: false,
            noti_discount: '',
          })
        );
        targetIndex = this.products.length - 1;
      } else {
        const ctrl = this.products.at(idx);
        const newQty = ctrl.value.qty + 1;
        ctrl.patchValue({ qty: newQty, total: ctrl.value.price * newQty, net_total: ctrl.value.price * newQty });
        targetIndex = idx;
      }
      this.calSum();
      this.flashRow(selectProduct.id);
      this.scrollToRow(targetIndex);
    }
  }

  trackByIndex = (index: number) => index;

  openImagePreview(src: string) {
    if (!src) return;
    this.previewImageSrc = src;
    this.displayImagePreview = true;
  }

  setItemName(index: number, name: string) {
    this.products.at(index)?.patchValue({ name }, { emitEvent: false });
  }

  removeProduct(index: number) {
    this.products.removeAt(index);
    this.calSum();
  }


  openPrice(item) {
    if (item.is_free) return; // ของแถมราคา 0 เสมอ แก้ราคาไม่ได้
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
    const number = Number(this._editNumber) || 0;
    const idx = this.products.controls.findIndex(c => c.value === this.itemSelect);
    if (idx !== -1) {
      const ctrl = this.products.at(idx);
      ctrl.patchValue({ price: number, total: number * ctrl.value.qty, net_total: number * ctrl.value.qty });
    }
    this.calSum();
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
    const number = Number(this._editNumber) || 0;
    const idx = this.products.controls.findIndex(c => c.value === this.itemSelect);
    if (idx !== -1) {
      const ctrl = this.products.at(idx);
      ctrl.patchValue({ qty: number, total: ctrl.value.price * number, net_total: ctrl.value.price * number });
    }
    this.calSum();
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
    const number = Number(this._editNumber) || 0;
    this.formCart.patchValue({ cash_transfer: number });
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
    const number = Number(this._editNumber) || 0;
    this.formCart.patchValue({ cash_received: number });

    const { payment_type, net_total, cash_transfer } = this.formCart.value;
    if (payment_type === 'เงินสด') {
      this.formCart.patchValue({ cash_return: number - net_total });
    } else if (payment_type === 'โอน' || payment_type === 'คนละครึ่ง') {
      this.formCart.patchValue({ cash_return: number - (net_total - cash_transfer) });
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
        cash_return: 0 - this.formCart.value.net_total,
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
    const idx = this.products.controls.findIndex(c => c.value === product_cart);
    if (idx !== -1) {
      const ctrl = this.products.at(idx);
      const total = ctrl.value.price * ctrl.value.qty;
      ctrl.patchValue({ total, net_total: total, noti_discount: '' });
    }
    this.calSum();
  }

  calSum() {
    this.applyGroupDiscounts();

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
    const raw = this.formSetting.value.barcode;
    const barcode = this.normalizeBarcode(raw);
    const product = this.product_type_groups
      .flatMap(t => t.product_brands)
      .flatMap(b => b.products)
      .find(p => this.normalizeBarcode(p.code) === barcode);

    if (product) {
      this.barcodeAlert = '';
      this.selectProduct(product);
      this.calSum();

      this.formSetting.reset({ barcode: '' });
    }
    else {
      this.showBarcodeNotFound(barcode || raw);
      this.formSetting.reset({ barcode: '' });
    }
  }

  private showBarcodeNotFound(code: string) {
    this.barcodeAlert = code || '-';
    clearTimeout(this._barcodeAlertTimer);
    this._barcodeAlertTimer = setTimeout(() => { this.barcodeAlert = ''; }, 4000);
    this.playBeep();
  }

  private playBeep() {
    try {
      const Ctx = (window as any).AudioContext || (window as any).webkitAudioContext;
      if (!Ctx) return;
      const ctx = new Ctx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = 300;
      gain.gain.value = 0.12;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.28);
      osc.onended = () => ctx.close();
    } catch { }
  }

  private normalizeBarcode(barcode: any): string {
    return String(barcode ?? '')
      .trim()
      .split('')
      .map((char) => this.thaiToEnglishBarcodeMap[char] ?? char)
      .join('')
      .toUpperCase();
  }

  scrollToRow(index: number) {
    setTimeout(() => {
      const wrapper = this.table?.el?.nativeElement?.querySelector('.p-datatable-wrapper');
      if (!wrapper) return;
      const row = wrapper.querySelector(`tr[data-row-index="${index}"]`) as HTMLElement;
      if (row) {
        // เลื่อนให้แถวที่เพิ่ง add/อัปเดต มาอยู่กลางจอ เพื่อให้เห็นชัดเจน
        const rowRect = row.getBoundingClientRect();
        const wrapRect = wrapper.getBoundingClientRect();
        const rowTopInWrapper = rowRect.top - wrapRect.top + wrapper.scrollTop;
        const target = rowTopInWrapper - (wrapper.clientHeight / 2) + (rowRect.height / 2);
        wrapper.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
      } else {
        wrapper.scrollTop = wrapper.scrollHeight;
      }
    }, 100);
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

  onClearData() {
    // ยังไม่สร้างคำสั่งซื้อ (step='select') และมีสินค้าในตะกร้า → ต้องยืนยันก่อนล้าง
    if (this.products.length > 0) {
      this.displayClearConfirm = true;
    } else {
      this.clearData();
    }
  }

  confirmClearData() {
    this.clearData();
    this.displayClearConfirm = false;
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
    this.giftMode = false;
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
