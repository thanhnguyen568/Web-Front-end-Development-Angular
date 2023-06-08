import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  product: Product;
  // search
  searchForm: FormGroup;
  categories: Category[];
  p = 1;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
    this.searchForm = new FormGroup({
      productName: new FormControl(),
      productPrice: new FormControl(),
      category: new FormControl(),
      fromDate: new FormControl(),
      toDate: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.getAllProduct();
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.findAll().subscribe(data => {
      this.categories = data;
    });
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
      this.getAllProduct();
    });
  }

  removeQuantity() {
    if (this.product.productQuantity <= 0) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Sold out',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      this.product.productQuantity = this.product.productQuantity - 1;
    }
    this.productService.update(this.product.id, this.product).subscribe(() => {
      this.getAllProduct();
    });
  }

  onSearch() {
    const rfSearch = this.searchForm.value;
    this.productService.search(rfSearch).subscribe(data => {
        this.products = data;
      }
    );
  }

}
