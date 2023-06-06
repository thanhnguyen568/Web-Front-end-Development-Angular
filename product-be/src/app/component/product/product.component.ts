import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  product: Product;
  productForm: FormGroup;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    });
  }

  getProduct(id: number) {
    this.productService.findById(id).subscribe(data => {
      this.product = data;
    });
  }

  removeProduct() {
    this.productService.deleteById(this.product.id).subscribe(() => {
      this.router.navigateByUrl('/product/list');
      this.getAllProduct();
    });
  }

  removeQuantity() {
    if (this.product.productQuantity <= 0) {
      alert('sold out');
    } else {
      this.product.productQuantity = this.product.productQuantity - 1;
    }
    this.productService.update(this.product.id, this.product).subscribe(() => {
      this.router.navigateByUrl('/product/list');
      this.getAllProduct();
    });
  }

}
