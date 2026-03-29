import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { AppMainComponent } from './app.main.component';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../service/auth.service';
import { AppService } from '../service/app.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
    public branch_name: string = "";
    public profile: any = {};
    public displayEditProfile: boolean = false;
    public displayChangePass: boolean = false;


    public formResetPass: FormGroup;
    public formEdit: FormGroup;

    public genders = [
        { name: 'ชาย', value: 'M' },
        { name: 'หญิง', value: 'F' },
    ];

    constructor(
        public app: AppComponent,
        public appMain: AppMainComponent,
        private _router: Router,
        private _fb: FormBuilder,
        private _app_service: AppService,
        private _service: AuthService,
        private _messageService: MessageService,
    ) {
        this.branch_name = localStorage.getItem('branch_name');
    }

    ngOnInit(): void {
        this.formResetPass = this._fb.group({
            old_password: '',
            password: '',
            confirm_password: '',
        });

        this.formEdit = this._fb.group({
            upload_image_profile_status: false,
            image_profile: "",
            first_name: '',
            last_name: '',
            gender: '',
            member_group_name: "",
        });

        this.loadProfie();
    }

    loadProfie() {
        this._app_service.getProfile().subscribe((resp: any) => {
            this.profile = resp.data;
        });
    }

    openChangePass() {
        this.formResetPass = this._fb.group({
            old_password: '',
            password: '',
            confirm_password: '',
        });
        this.formResetPass = this._fb.group({
            old_password: "",
            password: "",
            confirm_password: "",
        });
        this.displayChangePass = true
    }

    confirmChangePass() {
        this._app_service.changeMemberPass(this.formResetPass.value).subscribe({
            next: (resp: any) => {
                this.displayChangePass = false
                this.showSuccess(resp.message);
            },
            error: (err) => {
                this.showError(err.error.message);
            },
        });
    }

    cancelChangePass() {
        this.displayChangePass = false
    }

    openEditProfile() {
        this.formEdit = this._fb.group({
            upload_image_profile_status: false,
            image_profile: "",
            first_name: '',
            last_name: '',
            gender: '',
            member_group_name: "",
        });
        this._app_service.getProfile()
            .subscribe((resp: any) => {
                this.formEdit.patchValue({
                    ...resp.data
                })
                this.displayEditProfile = true
            });
    }

    onSelectImageProfile(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files?.length) {
            this._app_service.uploadImage(input.files[0]).subscribe({
                next: (resp: any) => {
                    this.formEdit.patchValue({
                        upload_image_profile_status: true,
                        image_profile: resp.url,
                    })
                },
                error: (err) => {
                    this.showError(err.error.message);
                },
            });
        }
    }

    confirmEdit() {
        this._app_service.updateProfile(this.formEdit.value).subscribe({
            next: (resp: any) => {
                this.displayEditProfile = false
                this.showSuccess(resp.message);
            },
            error: (err) => {
                this.showError(err.error.message);
            },
        });
    }

    cancelEdit() {
        this.displayEditProfile = false
    }

    logout() {
        localStorage.removeItem('permissions');
        this._service.logout();
        this._router.navigate(['/login']);
    }
    showError(massage: string) {
        this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
    }
    showSuccess(massage: string) {
        this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
    }
}
