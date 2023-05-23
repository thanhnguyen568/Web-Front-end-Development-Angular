import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddModalComponent } from './component/add-modal/add-modal.component';
import { DeleteModalComponent } from './component/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddModalComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
