import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './component/product/product.component';
import {CategoryComponent} from './component/category/category.component';
import {ProductUpdateComponent} from './component/product-update/product-update.component';
import {ProductCreateComponent} from './component/product-create/product-create.component';
import {LoginComponent} from './security/login/login.component';


const routes: Routes = [
  {path: 'product/list', component: ProductComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/update/:id', component: ProductUpdateComponent},
  {path: 'category/list', component: CategoryComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
