import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  id: string;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // const id = parseInt(paramMap.get('id'), 10);
      this.id = paramMap.get('id');
      const product = this.productService.findById(this.id);

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

  submitUpdate(id: string) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product);
    this.productForm.reset();
    this.router.navigateByUrl('/product/list');
  }

}
