import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonService } from './services/person.service';
import { ListPersonComponent } from './list-person/list-person.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListPersonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    PersonService
  ]
})
export class PersonModule { }
