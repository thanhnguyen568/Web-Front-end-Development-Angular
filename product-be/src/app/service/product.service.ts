import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_PROD = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {
  }

  public findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_PROD);
  }

  save(product): Observable<Product> {
    return this.httpClient.post<Product>(this.API_PROD, product);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.API_PROD}/${id}`);
  }

  update(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.API_PROD}/${id}`, product);
  }

  deleteById(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.API_PROD}/${id}`);
  }
}
