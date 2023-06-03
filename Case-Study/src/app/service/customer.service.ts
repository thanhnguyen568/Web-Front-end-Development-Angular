import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [{
    customerId: 1,
    customerName: 'Thành',
    customerDateOfBirth: '1993/03/02',
    customerIdCard: '123456789',
    customerPhone: 123456,
    customerEmail: 'thanh@gmail.com',
    customerAddress: 'Quảng Nam',
    customerType: {
      typeId: 5,
      typeName: 'Diamond'
    }
  }, {
    customerId: 2,
    customerName: 'Giang',
    customerDateOfBirth: '1991/08/08',
    customerIdCard: '123456789',
    customerPhone: 123456,
    customerEmail: 'giang@gmail.com',
    customerAddress: 'Gia Lai',
    customerType: {
      typeId: 4,
      typeName: 'Platinum'
    }
  }
  ];

  constructor() {
  }

  public findAll() {
    return this.customers;
  }

  public save(customer) {
    this.customers.push(customer);
  }

  public findById(id: number) {
    return this.customers.find(customer => customer.customerId === id);
  }

  public update(id: number, customer: Customer) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].customerId === id) {
        this.customers[i] = customer;
      }
    }
  }

  public deleteById(id: number) {
    this.customers = this.customers.filter(customer => {
      return customer.customerId !== id;
    });
  }
}
