import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_CATE = 'http://localhost:3000/categories';

  constructor(private httpClient: HttpClient) {
  }

  public findAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API_CATE);
  }

  public findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(this.API_CATE + '/' + id);
  }
}
