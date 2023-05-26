import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentComponent} from './component/student/student.component';
import {StudentCreateComponent} from './component/student-create/student-create.component';
import {StudentDetailComponent} from './component/student-detail/student-detail.component';
import {ModalDeleteComponent} from './component/modal-delete/modal-delete.component';
import {ChildComponent} from './component/child/child.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentCreateComponent,
    StudentDetailComponent,
    ModalDeleteComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
