import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';
import {Category} from '../../model/category';
import {FormGroup, FormControl, Validators, ValidationErrors, AbstractControl} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[];
  amount: number;

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
      vat: new FormControl('', []),
      amount: new FormControl('', []),
      category: new FormControl('', []),
    });

    this.categoryService.findAll().subscribe(data => {
      this.categories = data;
    });
  }

  onChangeInput() {
    const product = this.productForm.value;
    this.amount = product.productPrice * product.productQuantity * (product.vat / 100);
  }

  createProduct() {
    const product = this.productForm.value;
    this.productService.save(product).subscribe(data => {
      this.productForm.reset();
      this.router.navigateByUrl('product/list');
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Save a record successful',
      showConfirmButton: false,
      timer: 1500
    });
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
