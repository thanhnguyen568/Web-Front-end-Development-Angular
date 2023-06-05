import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './component/product/product.component';
import {CategoryComponent} from './component/category/category.component';


const routes: Routes = [
  {path: 'product/list', component: ProductComponent},
  {path: 'category/list', component: CategoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
