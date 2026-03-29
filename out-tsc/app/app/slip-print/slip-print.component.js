import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class SlipPrintComponent {
    static { this.ɵfac = function SlipPrintComponent_Factory(t) { return new (t || SlipPrintComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SlipPrintComponent, selectors: [["app-slip-print"]], decls: 3, vars: 0, consts: [["id", "slip-print-section", 1, "slip-container"]], template: function SlipPrintComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h5");
            i0.ɵɵtext(2, "\u0E43\u0E1A\u0E40\u0E2A\u0E23\u0E47\u0E08");
            i0.ɵɵelementEnd()();
        } }, styles: [".slip-container[_ngcontent-%COMP%] {\n  width: 80mm;\n  padding: 5mm;\n  font-family: 'Mitr', 'Noto Sans Thai', 'Sarabun', Tahoma, sans-serif;\n  font-size: 12px;\n}\n\n.header[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.item-list[_ngcontent-%COMP%] {\n  border-top: 1px dashed #000;\n  border-bottom: 1px dashed #000;\n  padding: 5px 0;\n  margin-bottom: 10px;\n}\n\n.item-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.total-summary[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: bold;\n}\n\n@media print {\n  body[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n\n  .slip-container[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlipPrintComponent, [{
        type: Component,
        args: [{ selector: 'app-slip-print', template: "<div id=\"slip-print-section\" class=\"slip-container\">\n  <h5>\u0E43\u0E1A\u0E40\u0E2A\u0E23\u0E47\u0E08</h5>\n</div>\n", styles: [".slip-container {\n  width: 80mm;\n  padding: 5mm;\n  font-family: 'Mitr', 'Noto Sans Thai', 'Sarabun', Tahoma, sans-serif;\n  font-size: 12px;\n}\n\n.header,\n.footer {\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.item-list {\n  border-top: 1px dashed #000;\n  border-bottom: 1px dashed #000;\n  padding: 5px 0;\n  margin-bottom: 10px;\n}\n\n.item-row {\n  display: flex;\n  justify-content: space-between;\n}\n\n.total-summary {\n  text-align: right;\n  font-weight: bold;\n}\n\n@media print {\n  body {\n    margin: 0;\n    padding: 0;\n  }\n\n  .slip-container {\n    box-shadow: none;\n  }\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=slip-print.component.js.map