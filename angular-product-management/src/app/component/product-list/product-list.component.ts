import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  product: Product;
  masterSelected: boolean;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
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

  findAll() {
    this.products = this.productService.findAll();
  }

  removeProduct(id: string) {
    this.productService.deleteById(id);
    this.router.navigateByUrl('/product/list');
  }

  getProduct(productCode: string) {
    this.product = this.productService.findById(productCode);
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
