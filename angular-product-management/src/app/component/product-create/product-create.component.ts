import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
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
  cbm: number;

  constructor(private productService: ProductService,
              private categoriesService: CategoryService,
              private router: Router) {

  }

  ngOnInit(): void {
    /**
     * Subscribe property: FormControl; Find all object 2nd
     */
    this.productForm = new FormGroup({
      productCode: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^P[0-9]*$')
      ]),
      productName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[^!@#$%^&*()_+=0-9-]+$')
      ]),
      productPrice: new FormControl('', []),
      productCreateDate: new FormControl('', [this.checkDate]),
      productWidth: new FormControl('', []),
      productLength: new FormControl('', []),
      productWeight: new FormControl('', []),
      productHeight: new FormControl('', []),
      productQuantity: new FormControl('', []),
      category: new FormControl('', [
        Validators.required,
      ]),
      cbm: new FormControl()
    });
    this.categories = this.categoriesService.findAll();
  }

  /**
   * Submit create new entry
   */
  createProduct() {
    // product.category = this.productForm.controls.category.value;
    const product = this.productForm.value;
    product.category = this.categoriesService.findById(product.category);

    this.productService.save(product);
    this.productForm.reset();
    this.router.navigateByUrl('/product/list');
  }

  /**
   * Tow-way binding onchange
   */
  onChangeInput() {
    const product = this.productForm.value;
    this.cbm = product.productWidth * product.productLength * product.productHeight * product.productQuantity;
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

  // export const checkPrice: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  //   const priceTicket = control.get("price").value;
  //
  //   if (priceTicket <= 0 && priceTicket != null) {
  //     return {"checkPrice": true};
  //   } else {
  //     return null;
  //   }
  // }

  // export const checkDayFrom: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  //   const dayFrom = new Date(control.get('dayFrom').value)
  //   const dayNow = new Date();
  //   if (dayFrom < dayNow) {
  //     return {"checkDayFrom": true};
  //   } else {
  //     return null;
  //   }
  // }
}
