import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[];
  category: Category;
  id: number;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(data => {
      this.categories = data;
    });
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        productCode: new FormControl(product.productCode),
        productName: new FormControl(product.productName),
        productCreateDate: new FormControl(product.productCreateDate),
        productPrice: new FormControl(product.productPrice),
        productQuantity: new FormControl(product.productQuantity),
        category: new FormControl(product.category.id)
      });
    });
  }

  getCategory(id: number) {
    this.categoryService.findById(id).subscribe(data => {
      this.category = data;
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.update(id, product).subscribe(() => {
      this.router.navigateByUrl('/product/list');
    });
  }
}
