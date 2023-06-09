import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';
import {Category} from '../../model/category';
import {FormGroup, FormControl, Validators, ValidationErrors, AbstractControl} from '@angular/forms';
import {Product} from '../../model/product';
import Swal from 'sweetalert2';


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
        Validators.pattern('^P-[0-9]*$'),
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

  createProduct() {
    const product = this.productForm.value;
    product.productCreateDate = new Date();
    this.productService.save(product).subscribe(data => {
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Save a record successful',
      showConfirmButton: false,
      timer: 1500
    });
    this.router.navigateByUrl('/product/list');
    this.getAllProduct();
  }

  /**
   * Custom validation
   */
  checkDate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value !== null && value !== undefined) {
      const currentDate = new Date();
      const birthDate = new Date(value);
      const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
      const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
      const daysDiff = currentDate.getDate() - birthDate.getDate();
      if (yearsDiff > 18 || (yearsDiff === 18 && monthsDiff > 0) || (yearsDiff === 18 && monthsDiff === 0 && daysDiff >= 0)) {
        return null;
      }
    }
    return {invalidAge: true}; // user trên 18 tuổi
  }
}
