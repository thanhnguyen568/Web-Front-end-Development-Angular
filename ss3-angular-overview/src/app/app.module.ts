import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontComponent } from './component/font/font.component';
import {FormsModule} from '@angular/forms';
import {TableComponent} from './component/table/table.component';
import { PickerColorComponent } from './component/picker-color/picker-color.component';
@NgModule({
  declarations: [
    AppComponent,
    FontComponent,
    TableComponent,
    PickerColorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
