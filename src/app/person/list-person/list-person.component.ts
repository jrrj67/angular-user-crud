import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/models/person.model';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  people: Array<Person> = [];

  get hasPeople(): boolean {
    return this.people.length > 0;
  }

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.people = this.personService.getAll();
  }
}
