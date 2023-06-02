import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[];

  constructor(private productService: ProductService,
              private router: Router,
              private categoriesService: CategoryService) {

  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productCode: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^P[0-9]*$')
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
      productQuantity: new FormControl('', [
        Validators.required,
      ]),
      category: new FormControl('', [
        Validators.required,
      ])
    });
    this.categories = this.categoriesService.findAll();
  }

  createProduct() {
    const product = this.productForm.value;
    // product.category = this.productForm.controls.category.value;
    product.category = this.categoriesService.findById(product.category);

    this.productService.save(product);
    this.productForm.reset();
    this.router.navigateByUrl('/product/list');
  }

}
