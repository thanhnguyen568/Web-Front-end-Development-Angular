import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  customer: Customer;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customers = this.customerService.findAll();
  }

  getCustomer(customerId: number) {
    this.customer = this.customerService.findById(+customerId);
  }

  removeCustomer() {
    this.customer = this.customerService.findById(+this.customer.customerId);
    this.customerService.deleteById(+this.customer.customerId);
    this.customers = this.customerService.findAll();
  }
}
