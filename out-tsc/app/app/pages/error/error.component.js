import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class ErrorComponent {
    static { this.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ErrorComponent, selectors: [["app-error"]], decls: 2, vars: 0, template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "error works!");
            i0.ɵɵelementEnd();
        } } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ErrorComponent, [{
        type: Component,
        args: [{ selector: 'app-error', template: "<p>error works!</p>\n" }]
    }], null, null); })();
//# sourceMappingURL=error.component.js.map