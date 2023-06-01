import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './component/product-list/product-list.component';
import {ProductCreateComponent} from './component/product-create/product-create.component';
import {ProductDetailComponent} from './component/product-detail/product-detail.component';
import {ProductUpdateComponent} from './component/product-update/product-update.component';
import {ProductDeleteComponent} from './component/product-delete/product-delete.component';
import {CategoryListComponent} from './component/category-list/category-list.component';


const routes: Routes = [
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/detail/:id', component: ProductDetailComponent},
  {path: 'product/update/:id', component: ProductUpdateComponent},
  {path: 'product/delete/:id', component: ProductDeleteComponent},
  {path: 'category/list', component: CategoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
