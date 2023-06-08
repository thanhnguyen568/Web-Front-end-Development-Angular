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

  updateProduct(id: number) {
    debugger;
    const product = this.productForm.value;

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
        // return delay(2000);
      });
    //  setTimeout(reject, ms);
    // .catch(() => {
    //   console.log('error');
    // });

  }
}
