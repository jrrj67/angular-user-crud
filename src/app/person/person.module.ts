import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonService } from './services/person.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PersonService
  ]
})
export class PersonModule { }
