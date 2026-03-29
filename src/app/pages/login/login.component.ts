import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from "primeng/api";
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;
  public selectForm: FormGroup;
  public step = 1;

  public branchs = [];

  constructor(
    private _service: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });

    this.selectForm = this._formBuilder.group({
      branch_id: ["", Validators.required],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.showError("กรุณากำหนด Username และ Password");
    }
    else {
      this._service.login(this.loginForm.value).subscribe({
        next: (resp: any) => {
          this.branchs = resp.data.branchs;
          if (this.branchs.length === 1) {
            this._service.setToken(resp.token);
            this._service.setName(resp.data.first_name + " " + resp.data.last_name);
            localStorage.setItem('branch', resp.data.branchs[0].id);
            localStorage.setItem('branch_name', resp.data.branchs[0].id);
            this._router.navigate(['/app/user_group']);
          }
          else {
            this._service.setToken(resp.token);
            this._service.setName(resp.data.first_name + " " + resp.data.last_name);
            this.selectForm.patchValue({
              branch_id: resp.data.branchs[0].id,
            })
          }
          this.step = 2;
        },
        error: (err) => {
          this.showError(err.error.message);
        },
      });
    }
  }

  select_branch() {
    const branch = this.branchs.find(x => x.id == this.selectForm.value.branch_id);
    localStorage.setItem('branch', this.selectForm.value.branch_id);
    localStorage.setItem('branch_name', branch?.name ?? '');
    this._router.navigate(['/app/user_group']);
  }

  showError(massage: string) {
    this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
  }
}
