import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  masterSelected: boolean;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }

  getProducts() {
    this.products = this.productService.getAll();
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
}
