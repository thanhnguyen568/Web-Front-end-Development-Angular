import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../model/person';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  API_PER = 'http://localhost:3000/persons';

  constructor(private httpClient: HttpClient) {
  }

  public findAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.API_PER);
  }

  public findById(id: string): Observable<Person> {
    return this.httpClient.get<Person>(this.API_PER + '/' + id);
  }
}
