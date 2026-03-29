import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
import * as i2 from "@angular/router";
export class AppComponent {
    constructor(primengConfig) {
        this.primengConfig = primengConfig;
        this.menu = 'slim';
        this.layout = 'turquoise';
        this.darkMenu = false;
        this.inputStyle = 'outlined';
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
    }
    static { this.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.PrimeNGConfig)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "router-outlet");
        } }, dependencies: [i2.RouterOutlet], encapsulation: 2 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', template: "<router-outlet></router-outlet>\n" }]
    }], function () { return [{ type: i1.PrimeNGConfig }]; }, null); })();
//# sourceMappingURL=app.component.js.map