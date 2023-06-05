import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';
import {Category} from '../../model/category';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  products: Product[];
  categories: Category[];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    /**
     * Subscribe property: FormControl; Find all object 2nd
     */
    this.productForm = new FormGroup({
      productCode: new FormControl('', [
        Validators.required,
        Validators.pattern('^P[0-9]*$')
      ]),
      productName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[^!@#$%^&*()_+=0-9-]+$')
      ]),
      productCreateDate: new FormControl('', []),
      productPrice: new FormControl('', []),

      productQuantity: new FormControl('', []),
      category: new FormControl('', []),
    });
    this.categoryService.findAll().subscribe(data => {
      this.categories = data;
    });
  }

  getAllProduct() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    });
  }

  createProduct() {
    const product = this.productForm.value;
    this.productService.save(product).subscribe(data => {
      this.router.navigateByUrl('/product/list');
      this.getAllProduct();
    });
  }
}
