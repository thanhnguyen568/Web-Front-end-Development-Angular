import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectComponent} from './component/project/project.component';
import {ProjectUpdateComponent} from './component/project-update/project-update.component';

const routes: Routes = [
  {path: 'project/list', component: ProjectComponent},
  {path: 'project/update/:id', component: ProjectUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
