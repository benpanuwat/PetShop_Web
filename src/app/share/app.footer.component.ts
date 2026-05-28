import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer app-footer-custom">
            <span class="footer-copy">
                &copy; {{ year }} <strong>PuyPuy PetMart</strong> — POS System
            </span>
        </div>
    `
})
export class AppFooterComponent {
    year = new Date().getFullYear();
}
