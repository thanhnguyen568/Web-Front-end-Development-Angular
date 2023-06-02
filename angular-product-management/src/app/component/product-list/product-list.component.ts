import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  masterSelected: boolean;
  products: Product[];
  product: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.findAll();
  }

  /**
   * UncheckAll
   */
  checkUncheckAll() {
    this.products.forEach(product => {
      // @ts-ignore
      product.isSelected = this.masterSelected;
    });
  }

  /**
   * CheckAll
   */
  isAllSelected() {
    this.masterSelected = this.products.every(product => {
      // @ts-ignore
      return product.isSelected === true;
    });
  }

  getProduct(productCode: string) {
    this.product = this.productService.findById(productCode);
  }

  removeProduct() {
    this.product = this.productService.findById(this.product.productCode);
    this.productService.deleteById(this.product.productCode);
    this.products = this.productService.findAll();
  }

  removeQuantity() {
    this.product = this.productService.findById(this.product.productCode);
    if (this.product.productQuantity <= 0) {
      alert('sold out');
    } else {
      this.product.productQuantity = this.product.productQuantity - 1;
    }
    this.productService.update(this.product.productCode, this.product);
  }
}
