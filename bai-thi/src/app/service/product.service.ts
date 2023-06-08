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

  search(rfSearch: any): Observable<Product[]> {
    let key = '?';
    const productName = rfSearch.productName;
    if (productName !== '' && productName !== null) {
      key += 'productName_like=' + productName + '&';
    }
    const productPrice = rfSearch.productPrice;
    if (productPrice !== '' && productPrice !== null) {
      key += 'productPrice_like=' + productPrice + '&';
    }
    const category = rfSearch.category;
    if (category !== '' && category !== null) {
      key += 'category.id_like=' + category + '&';
    }
    const fromDate = rfSearch.fromDate;
    if (fromDate !== '' && fromDate !== null) {
      key += 'productCreateDate_gte=' + fromDate + '&';
    }
    const toDate = rfSearch.toDate;
    if (toDate !== '' && toDate !== null) {
      key += 'productCreateDate_lte=' + toDate + '&';
    }
    return this.httpClient.get<Product[]>(this.API_PROD + key);
  }
}
