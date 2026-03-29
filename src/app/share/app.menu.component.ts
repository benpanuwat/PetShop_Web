import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AppMainComponent } from './app.main.component';
import { AppService } from '../service/app.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    permissions: any = {};
    model: any[];

    constructor(public app: AppComponent, public appMain: AppMainComponent, private _service: AppService, private router: Router) { }

    ngOnInit() {
        this._service.getPermissions().subscribe({
            next: (resp: any) => {
                this.permissions = resp.data;
                localStorage.setItem('permissions', JSON.stringify(this.permissions));

                let itemsMenu1 = [];
                if (this.permissions.view_user)
                    itemsMenu1.push({ label: 'ผู้ใช้งาน', icon: 'pi pi-fw pi-user', routerLink: ['/app/user'] });
                if (this.permissions.view_user_group)
                    itemsMenu1.push({ label: 'กลุ่มสิทธิ', icon: 'pi pi-fw pi-lock', routerLink: ['/app/user_group'] });

                let itemsMenu2 = [];
                itemsMenu2.push({ label: 'สมาชิก', icon: 'pi pi-fw pi-users', routerLink: ['/app/member'] });

                let itemsMenu3 = [];
                itemsMenu3.push({ label: 'สาขา', icon: 'pi pi-fw pi-building', routerLink: ['/app/branch'] });

                let itemsMenu4 = [];
                if (this.permissions.view_product_type)
                    itemsMenu4.push({ label: 'ประเภทสินค้า', icon: 'pi pi-th-large', routerLink: ['/app/product_type'] });
                // if (this.permissions.view_product_brand)
                itemsMenu4.push({ label: 'แบรนด์สินค้า', icon: 'pi pi-apple', routerLink: ['/app/product_brand'] });
                if (this.permissions.view_product)
                    itemsMenu4.push({ label: 'สินค้า', icon: 'pi pi-fw pi-box', routerLink: ['/app/product'] });
                if (this.permissions.view_patient)
                    itemsMenu4.push({ label: 'คนไข้', icon: 'pi pi-fw pi-users', routerLink: ['/app/patient'] });
                if (this.permissions.view_report)
                    itemsMenu4.push({
                        label: 'รายงาน', icon: 'pi pi-fw pi-chart-bar', items: [
                            { label: 'รายงานสถานที่ตรวจ', routerLink: ['/app/location_report'] },
                            { label: 'รายงานห้องตรวจ', routerLink: ['/app/room_report'] }
                        ]
                    });

                let itemsMenu5 = [];
                if (this.permissions.view_stock)
                    itemsMenu5.push({ label: 'คลังสินค้า', icon: 'pi pi-fw pi-th-large', routerLink: ['/app/stock'] });
                itemsMenu5.push({ label: 'รับสินค้า', icon: 'pi pi-fw pi-download', routerLink: ['/app/receive_product'] });
                itemsMenu5.push({ label: 'รายการรับสินค้า', icon: 'pi pi-fw pi-list', routerLink: ['/app/product_lot'] });

                let itemsMenu6 = [];
                itemsMenu6.push({ label: 'เพิ่มคำสั่งซื้อ', icon: 'pi pi-fw pi-cart-plus', routerLink: ['/app/new_order'] });
                itemsMenu6.push({ label: 'รายการคำสั่งซื้อ', icon: 'pi pi-fw pi-list', routerLink: ['/app/order'] });

                this.model = [
                    {
                        label: 'ผู้ใช้งาน/สิทธิ', icon: 'pi pi-fw pi-user',
                        items: itemsMenu1,
                    },
                    {
                        label: 'สมาชิก', icon: 'pi pi-fw pi-users',
                        items: itemsMenu2,
                    },
                    {
                        label: 'จัดการสาขา', icon: 'pi pi-fw pi-building',
                        items: itemsMenu3,
                    },
                    {
                        label: 'จัดการข้อมูล', icon: 'pi pi-fw pi-box',
                        items: itemsMenu4,
                    },
                    {
                        label: 'คลังสินค้า', icon: 'pi pi-fw pi-th-large',
                        items: itemsMenu5,
                    },
                    {
                        label: 'คำสั่งซื้อ', icon: 'pi pi-fw pi-cart-plus',
                        items: itemsMenu6,
                    },

                ];
            },
            error: (err) => {
                localStorage.clear();
                this.router.navigate(['/login']);
            },
        });
    }
}
