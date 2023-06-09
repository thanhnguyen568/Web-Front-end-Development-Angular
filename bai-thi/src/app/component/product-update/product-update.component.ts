import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';

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
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productCode: new FormControl(),
      productName: new FormControl(),
      productCreateDate: new FormControl(),
      productPrice: new FormControl(),
      productQuantity: new FormControl(),
      category: new FormControl()
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');

      this.productService.findById(this.id).subscribe(data => {
        this.productForm.patchValue(data);
        this.productForm.get('category').setValue(data.category.id);
      });
    });

    this.categoryService.findAll().subscribe(data => {
      this.categories = data;
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    // product.category = this.categories.find(category => category.id = +product.category);

    function delay(ms: number) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
        setTimeout(reject, ms);
      });
    }

    delay(0).then(() => {
      this.categoryService.findById(product.category).subscribe(data => {
        product.category = data;
      });
      return delay(1000);
    })
      .then(() => {
        this.productService.update(id, product).subscribe(() => {
          this.router.navigateByUrl('/product/list');
        });
        return delay(0);
      });
    //  setTimeout(reject, ms);
    // .catch(() => {
    //   console.log('error');
    // });
  }
}
