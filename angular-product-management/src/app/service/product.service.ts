import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    productCode: 'P1',
    productName: 'Memory Card',
    productPrice: 500,
    productCreateDate: new Date(),
    productWidth: 20,
    productLength: 5,
    productWeight: 2,
    productHeight: 30,
    category: {
      categoryCode: '01',
      categoryName: 'Bánh',
    }
  },
    {
      productCode: 'P2',
      productName: 'CPU',
      productPrice: 1500,
      productCreateDate: new Date(),
      productWidth: 20,
      productLength: 5,
      productWeight: 2,
      productHeight: 30,
      category: {
        categoryCode: '02',
        categoryName: 'Mỳ',
      }
    }];

  constructor() {
  }

  public getAll() {
    return this.products;
  }

  public saveProduct(product) {
    this.products.push(product);
  }

  public findById(id: string) {
    return this.products.find(product => product.productCode === id);
  }

  public updateProduct(id: string, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].productCode === id) {
        this.products[i] = product;
      }
    }
  }

  deleteProduct(id: string) {
    this.products = this.products.filter(product => {
      return product.productCode !== id;
    });
  }
}
