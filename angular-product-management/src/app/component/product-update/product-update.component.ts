import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  id: string;
  categories: Category[];

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoriesService: CategoryService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // const id = parseInt(paramMap.get('id'), 10);
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
        category: new FormControl(product.category.categoryCode, [
          Validators.required,
        ])
      });
      this.categories = this.categoriesService.findAll();
    });
  }

  getProduct(id: string) {
    return this.productService.findById(id);
  }

  updateProduct(id: string) {
    const product = this.productForm.value;
    product.category = this.categoriesService.findById(product.category);

    this.productService.update(id, product);
    this.productForm.reset();
    this.router.navigateByUrl('/product/list');
  }

}
