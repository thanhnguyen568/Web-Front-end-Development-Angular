import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './component/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import {CategoryComponent} from './component/category/category.component';
import {ProductCreateComponent} from './component/product-create/product-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductUpdateComponent} from './component/product-update/product-update.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {SecurityModule} from './security/security.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    ProductCreateComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    SecurityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
