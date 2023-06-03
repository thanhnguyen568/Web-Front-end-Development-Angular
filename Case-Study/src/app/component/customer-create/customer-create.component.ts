import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {TypeService} from '../../service/type.service';
import {Type} from '../../model/type';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  types: Type[];

  constructor(private customerService: CustomerService,
              private typeService: TypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    /**
     * Subscribe property: FormControl; Find all object 2nd
     */
    this.customerForm = new FormGroup({
      customerId: new FormControl('', []),
      customerName: new FormControl('', []),
      customerDateOfBirth: new FormControl('', []),
      customerIdCard: new FormControl('', []),
      customerPhone: new FormControl('', []),
      customerEmail: new FormControl('', []),
      customerAddress: new FormControl('', []),
      customerType: new FormControl('', []),
    });
    this.types = this.typeService.findAll();
  }

  createCustomer() {
    const customer = this.customerForm.value;
    customer.customerType = this.typeService.findById(+customer.customerType);
    // product.category = this.productForm.controls.category.value;

    this.customerService.save(customer);
    this.customerForm.reset();
    this.router.navigateByUrl('/customer/list');
  }
}
