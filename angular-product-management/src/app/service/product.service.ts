import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  public getProducts() {
    let products: Product[];
    products = [{
      productCode: 'P1',
      productName: 'Memory Card',
      productPrice: 500,
      productCreateDate: new Date(),
      productWidth: 20,
      productLength: 5,
      productWeight: 2,
      productHeight: 30
    },
      {
        productCode: 'P2',
        productName: 'CPU',
        productPrice: 1500,
        productCreateDate: new Date(),
        productWidth: 20,
        productLength: 5,
        productWeight: 2,
        productHeight: 30
      }];
    return products;
  }
}
