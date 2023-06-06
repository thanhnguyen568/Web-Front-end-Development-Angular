import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './component/product/product.component';
import {CategoryComponent} from './component/category/category.component';
import {ProductUpdateComponent} from './component/product-update/product-update.component';


const routes: Routes = [
  {path: 'product/list', component: ProductComponent},
  {path: 'product/update/:id', component: ProductUpdateComponent},
  {path: 'category/list', component: CategoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
