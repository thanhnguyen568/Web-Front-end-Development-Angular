import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './component/customer/customer.component';
import {EmployeeComponent} from './component/employee/employee.component';


const routes: Routes = [
  {path: 'customer/list', component: CustomerComponent},
  {path: 'employee/list', component: EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
