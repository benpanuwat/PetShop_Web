import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MessageService } from 'primeng/api';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FullCalendarModule } from '@fullcalendar/angular';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { InplaceModule } from 'primeng/inplace';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
// Application Components
import { AppComponent } from './app.component';
import { AppMainComponent } from './share/app.main.component';
import { AppConfigComponent } from './share/app.config.component';
import { AppMenuComponent } from './share/app.menu.component';
import { AppMenuitemComponent } from './share/app.menuitem.component';
import { AppTopBarComponent } from './share/app.topbar.component';
import { AppFooterComponent } from './share/app.footer.component';
import { AppService } from './service/app.service';
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
import { ReceiveProductComponent } from './pages/receive-product/receive-product.component';
import { ProductLotComponent } from './pages/product-lot/product-lot.component';
import { SlipPrintComponent } from './slip-print/slip-print.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
export class AppModule {
    static { this.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
            { provide: LocationStrategy, useClass: HashLocationStrategy },
            AppService,
            MessageService,
        ], imports: [BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            AppRoutingModule,
            HttpClientModule,
            BrowserAnimationsModule,
            AvatarGroupModule,
            AvatarModule,
            BadgeModule,
            AccordionModule,
            AutoCompleteModule,
            BreadcrumbModule,
            ButtonModule,
            CalendarModule,
            CardModule,
            CarouselModule,
            CascadeSelectModule,
            ChartModule,
            CheckboxModule,
            ChipModule,
            ChipsModule,
            ConfirmDialogModule,
            ConfirmPopupModule,
            ColorPickerModule,
            ContextMenuModule,
            DataViewModule,
            DialogModule,
            DividerModule,
            DropdownModule,
            FieldsetModule,
            FileUploadModule,
            FullCalendarModule,
            GalleriaModule,
            ImageModule,
            InplaceModule,
            KnobModule,
            InputNumberModule,
            InputMaskModule,
            InputSwitchModule,
            InputTextModule,
            InputTextareaModule,
            ListboxModule,
            MegaMenuModule,
            MenuModule,
            MenubarModule,
            MessageModule,
            MessagesModule,
            MultiSelectModule,
            OrderListModule,
            OrganizationChartModule,
            OverlayPanelModule,
            PaginatorModule,
            PanelModule,
            PanelMenuModule,
            PasswordModule,
            PickListModule,
            ProgressBarModule,
            RadioButtonModule,
            RatingModule,
            RippleModule,
            ScrollPanelModule,
            ScrollTopModule,
            SelectButtonModule,
            SidebarModule,
            SkeletonModule,
            SlideMenuModule,
            SliderModule,
            SplitButtonModule,
            SplitterModule,
            StepsModule,
            TableModule,
            TabMenuModule,
            TabViewModule,
            TagModule,
            TerminalModule,
            TieredMenuModule,
            TimelineModule,
            ToastModule,
            ToggleButtonModule,
            ToolbarModule,
            TooltipModule,
            TreeModule,
            TreeTableModule,
            VirtualScrollerModule,
            ProgressSpinnerModule] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                imports: [
                    BrowserModule,
                    FormsModule,
                    ReactiveFormsModule,
                    AppRoutingModule,
                    HttpClientModule,
                    BrowserAnimationsModule,
                    AvatarGroupModule,
                    AvatarModule,
                    BadgeModule,
                    AccordionModule,
                    AutoCompleteModule,
                    BreadcrumbModule,
                    ButtonModule,
                    CalendarModule,
                    CardModule,
                    CarouselModule,
                    CascadeSelectModule,
                    ChartModule,
                    CheckboxModule,
                    ChipModule,
                    ChipsModule,
                    ConfirmDialogModule,
                    ConfirmPopupModule,
                    ColorPickerModule,
                    ContextMenuModule,
                    DataViewModule,
                    DialogModule,
                    DividerModule,
                    DropdownModule,
                    FieldsetModule,
                    FileUploadModule,
                    FullCalendarModule,
                    GalleriaModule,
                    ImageModule,
                    InplaceModule,
                    KnobModule,
                    InputNumberModule,
                    InputMaskModule,
                    InputSwitchModule,
                    InputTextModule,
                    InputTextareaModule,
                    ListboxModule,
                    MegaMenuModule,
                    MenuModule,
                    MenubarModule,
                    MessageModule,
                    MessagesModule,
                    MultiSelectModule,
                    OrderListModule,
                    OrganizationChartModule,
                    OverlayPanelModule,
                    PaginatorModule,
                    PanelModule,
                    PanelMenuModule,
                    PasswordModule,
                    PickListModule,
                    ProgressBarModule,
                    RadioButtonModule,
                    RatingModule,
                    RippleModule,
                    ScrollPanelModule,
                    ScrollTopModule,
                    SelectButtonModule,
                    SidebarModule,
                    SkeletonModule,
                    SlideMenuModule,
                    SliderModule,
                    SplitButtonModule,
                    SplitterModule,
                    StepsModule,
                    TableModule,
                    TabMenuModule,
                    TabViewModule,
                    TagModule,
                    TerminalModule,
                    TieredMenuModule,
                    TimelineModule,
                    ToastModule,
                    ToggleButtonModule,
                    ToolbarModule,
                    TooltipModule,
                    TreeModule,
                    TreeTableModule,
                    VirtualScrollerModule,
                    ProgressSpinnerModule,
                ],
                declarations: [
                    AppComponent,
                    AppMainComponent,
                    AppConfigComponent,
                    AppMenuComponent,
                    AppMenuitemComponent,
                    AppTopBarComponent,
                    AppFooterComponent,
                    LoginComponent,
                    AccessdeniedComponent,
                    ErrorComponent,
                    NotfoundComponent,
                    UserComponent,
                    UserGroupComponent,
                    MemberComponent,
                    ProductTypeComponent,
                    ProductBrandComponent,
                    ProductComponent,
                    NewOrderComponent,
                    OrderComponent,
                    SlipPrintComponent,
                    StockComponent,
                    ProductLotComponent,
                    ReceiveProductComponent,
                    BranchComponent,
                ],
                providers: [
                    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
                    { provide: LocationStrategy, useClass: HashLocationStrategy },
                    AppService,
                    MessageService,
                ],
                bootstrap: [AppComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        AppMainComponent,
        AppConfigComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        LoginComponent,
        AccessdeniedComponent,
        ErrorComponent,
        NotfoundComponent,
        UserComponent,
        UserGroupComponent,
        MemberComponent,
        ProductTypeComponent,
        ProductBrandComponent,
        ProductComponent,
        NewOrderComponent,
        OrderComponent,
        SlipPrintComponent,
        StockComponent,
        ProductLotComponent,
        ReceiveProductComponent,
        BranchComponent], imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AvatarGroupModule,
        AvatarModule,
        BadgeModule,
        AccordionModule,
        AutoCompleteModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        ChipsModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        ImageModule,
        InplaceModule,
        KnobModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TieredMenuModule,
        TimelineModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        ProgressSpinnerModule] }); })();
i0.ɵɵsetComponentScope(AppMainComponent, [i1.NgClass, i1.NgIf, i2.RouterOutlet, AppConfigComponent,
    AppMenuComponent,
    AppTopBarComponent,
    AppFooterComponent], []);
//# sourceMappingURL=app.module.js.map