import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './share/app.main.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { AccessdeniedComponent } from './pages/accessdenied/accessdenied.component';
import { ErrorComponent } from './pages/error/error.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

import { UserComponent } from './pages/user/user.component';
import { UserGroupComponent } from './pages/user-group/user-group.component';
import { MemberComponent } from './pages/member/member.component';
import { BranchComponent } from './pages/branch/branch.component';
import { ProductTypeComponent } from './pages/product_type/product_type.component';
import { ProductBrandComponent } from './pages/product_brand/product_brand.component';
import { ProductComponent } from './pages/product/product.component';
import { NewOrderComponent } from './pages/new-order/new-order.component';
import { OrderComponent } from './pages/order/order.component';
import { StockComponent } from './pages/stock/stock.component';
import { ProductLotComponent } from './pages/product-lot/product-lot.component';
import { ReceiveProductComponent } from './pages/receive-product/receive-product.component';
import { DailyCashClosingComponent } from './pages/daily-cash-closing/daily-cash-closing.component';
import { SupplierComponent } from './pages/supplier/supplier.component';

import { SlipPrintComponent } from './slip-print/slip-print.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'app', component: AppMainComponent,
                children: [
                    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
                    { path: 'user_group', component: UserGroupComponent, canActivate: [AuthGuard] },
                    { path: 'member', component: MemberComponent, canActivate: [AuthGuard] },
                    { path: 'branch', component: BranchComponent, canActivate: [AuthGuard] },
                    { path: 'product_type', component: ProductTypeComponent, canActivate: [AuthGuard] },
                    { path: 'product_brand', component: ProductBrandComponent, canActivate: [AuthGuard] },
                    { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
                    { path: 'new_order', component: NewOrderComponent, canActivate: [AuthGuard] },
                    { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
                    { path: 'stock', component: StockComponent, canActivate: [AuthGuard] },
                    { path: 'product_lot', component: ProductLotComponent, canActivate: [AuthGuard] },
                    { path: 'receive_product', component: ReceiveProductComponent, canActivate: [AuthGuard] },
                    { path: 'daily_cash_closing', component: DailyCashClosingComponent, canActivate: [AuthGuard] },
                    { path: 'supplier', component: SupplierComponent, canActivate: [AuthGuard] },
                    { path: 'slip', component: SlipPrintComponent, canActivate: [AuthGuard] },
                ]
            },
            { path: 'error', component: ErrorComponent },
            { path: 'access', component: AccessdeniedComponent },
            { path: 'notfound', component: NotfoundComponent },
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: '/login' },
        ], { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
