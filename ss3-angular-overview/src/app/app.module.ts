import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontComponent } from './component/font/font.component';
import {FormsModule} from '@angular/forms';
import {TableComponent} from './component/table/table.component';
import { PickerColorComponent } from './component/picker-color/picker-color.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { HackernewsComponent } from './component/hackernews/hackernews.component';
import { LikeComponent } from './component/like/like.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CountdownComponent } from './component/countdown/countdown.component';
@NgModule({
  declarations: [
    AppComponent,
    FontComponent,
    TableComponent,
    PickerColorComponent,
    CalculatorComponent,
    HackernewsComponent,
    LikeComponent,
    HeaderComponent,
    FooterComponent,
    CountdownComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
