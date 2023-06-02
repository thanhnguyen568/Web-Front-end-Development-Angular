import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      productCode: 'P1',
      productName: 'Memory Card',
      productPrice: 500,
      productCreateDate: '1993/03/02',
      productWidth: 20,
      productLength: 5,
      productWeight: 2,
      productHeight: 30,
      productQuantity: 100,
      category: {
        categoryCode: '01',
        categoryName: 'Bánh',
      }
    },
    {
      productCode: 'P2',
      productName: 'CPU',
      productPrice: 1500,
      productCreateDate: '1993/03/02',
      productWidth: 20,
      productLength: 5,
      productWeight: 2,
      productHeight: 30,
      productQuantity: 100,
      category: {
        categoryCode: '02',
        categoryName: 'Mỳ',
      }
    },
    {
      productCode: 'P3',
      productName: 'Monitor',
      productPrice: 2500,
      productCreateDate: '1993/03/02',
      productWidth: 20,
      productLength: 5,
      productWeight: 5,
      productHeight: 30,
      productQuantity: 100,
      category: {
        categoryCode: '02',
        categoryName: 'Mỳ',
      }
    }];

  constructor() {
  }

  public findAll() {
    return this.products;
  }

  public save(product) {
    this.products.push(product);
  }

  public findById(id: string) {
    return this.products.find(product => product.productCode === id);
  }

  public update(id: string, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].productCode === id) {
        this.products[i] = product;
      }
    }
  }

  public deleteById(id: string) {
    this.products = this.products.filter(product => {
      return product.productCode !== id;
    });
  }
}
