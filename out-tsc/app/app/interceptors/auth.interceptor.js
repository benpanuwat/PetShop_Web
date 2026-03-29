import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../service/auth.service";
export class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const token = this.authService.getToken();
        if (token) {
            const clonedRequest = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            return next.handle(clonedRequest);
        }
        return next.handle(req);
    }
    static { this.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(i0.ɵɵinject(i1.AuthService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.AuthService }]; }, null); })();
//# sourceMappingURL=auth.interceptor.js.map