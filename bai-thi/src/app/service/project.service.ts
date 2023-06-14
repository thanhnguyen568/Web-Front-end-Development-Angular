import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  API_PRO = 'http://localhost:3000/projects';

  constructor(private httpClient: HttpClient) {
  }

  public findAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.API_PRO);
  }

  findById(id: number): Observable<Project> {
    return this.httpClient.get<Project>(`${this.API_PRO}/${id}`);
  }

  update(id: number, project: Project): Observable<Project> {
    return this.httpClient.put<Project>(`${this.API_PRO}/${id}`, project);
  }

  deleteById(id: number): Observable<Project> {
    return this.httpClient.delete<Project>(`${this.API_PRO}/${id}`);
  }
}
