import { Injectable } from '@angular/core';
import { Person } from 'src/app/shared/models/person.model';

const LS_KEY = "people";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() {
    this.seed();
  }

  seed(): void {

    if(this.getAll().length > 0) return;

    const people = new Array<Person>();

    const p1 = new Person(1, "Ricardo", 24);

    const p2 = new Person(2, "Amanda", 22);

    people.push(p1, p2);

    people.forEach(person => {
      this.insert(person);
    });
  }

  getAll(): Array<Person> {
    const people = localStorage[LS_KEY];

    return people ? JSON.parse(people) : [];
  }

  insert(person: Person): void {
    const people = this.getAll();

    people.push(person);

    localStorage[LS_KEY] = JSON.stringify(people);
  }

  getById(id: number): Person | undefined {
    const people = this.getAll();

    return people.find(p => p.id === id);
  }

  update(person: Person): void {
    const people = this.getAll();

    people.forEach((p, index, objs) => {
      if(p.id === person.id) {
        objs[index] = person;
      }
    });

    localStorage[LS_KEY] = JSON.stringify(people);
  }

  remove(id: number): void {
    const people = this.getAll();

    const newPeople = people.filter(p => p.id !== id);

    localStorage[LS_KEY] = JSON.stringify(newPeople);
  }
}
