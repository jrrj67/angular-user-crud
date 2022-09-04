import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonComponent } from './person/list-person/list-person.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'people/list',
    pathMatch: 'full'
  },
  {
    path: 'people',
    redirectTo: 'people/list',
    pathMatch: 'full'
  },
  {
    path: 'people/list',
    component: ListPersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
