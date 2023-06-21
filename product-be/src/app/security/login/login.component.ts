import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {TokenStorageService} from '../../service/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  username: string;
  roles: string;
  errorMessage = '';

  constructor(private formBuild: FormBuilder,
              private authService: AuthService,
              private tokenStorageService: TokenStorageService,
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuild.group({
        username: [''],
        password: [''],
        remember_me: ['']
      }
    );
  }

  onSubmit() {
    this.authService.login(this.formGroup.value).subscribe(
      data => {
        this.authService.isLoggedIn = true;
        this.username = this.tokenStorageService.getUser().username;
        this.roles = this.tokenStorageService.getUser().roles;
        this.formGroup.reset();
        // this.router.navigateByUrl(this.returnUrl);
        // this.shareService.sendClickEvent();
      },
      err => {
        this.errorMessage = err.error.message;
        this.authService.isLoggedIn = false;
        // this.toastr.error('Sai tên đăng nhập hoặc mật khẩu hoặc tài khoản chưa được kích hoạt', 'Đăng nhập thất bại: ', {
        //   timeOut: 3000,
        //   extendedTimeOut: 1500
        // });
      }
    );
  }
}
