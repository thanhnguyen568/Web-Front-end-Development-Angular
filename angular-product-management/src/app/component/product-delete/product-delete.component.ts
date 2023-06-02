import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  id: string;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      const product = this.getProduct(this.id);

      this.productForm = new FormGroup({
        productCode: new FormControl(product.productCode, [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^P[0-9]*$')
        ]),
        productName: new FormControl(product.productName, [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[^!@#$%^&*()_+=0-9-]+$')
        ]),
        productPrice: new FormControl(product.productPrice, [
          Validators.required,
        ]),
        productCreateDate: new FormControl(product.productCreateDate, [
          Validators.required,
        ]),
        productWidth: new FormControl(product.productWidth, [
          Validators.required,
        ]),
        productLength: new FormControl(product.productLength, [
          Validators.required,
        ]),
        productWeight: new FormControl(product.productWeight, [
          Validators.required,
        ]),
        productHeight: new FormControl(product.productHeight, [
          Validators.required,
        ]),
      });
    });
  }

  getProduct(id: string) {
    return this.productService.findById(id);
  }

  removeProduct(id: string) {
    this.productService.deleteById(id);
    this.router.navigateByUrl('/product/list');
  }
}
