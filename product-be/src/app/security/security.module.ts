import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class SecurityModule {
}
