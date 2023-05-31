import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productCode: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^KH-[0-9]{4}$')
      ]),
      productName: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^[^!@#$%^&*()_+=0-9-]+$')
      ]),
      productPrice: new FormControl('', [
        Validators.required,
      ]),
      productCreateDate: new FormControl('', [
        Validators.required,
      ]),
      productWidth: new FormControl('', [
        Validators.required,
      ]),
      productLength: new FormControl('', [
        Validators.required,
      ]),
      productWeight: new FormControl('', [
        Validators.required,
      ]),
      productHeight: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    this.productForm.reset();
  }
}
