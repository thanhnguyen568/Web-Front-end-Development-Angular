import {Injectable} from '@angular/core';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [{
    employeeId: 1,
    employeeName: 'Thành',
    employeeDateOfBirth: '1993/03/02',
    employeeIdCard: '123',
    employeePhone: 213123,
    employeeEmail: 'a@gmail',
    employeeAddress: 'DN',
    employeeSalary: 123123,
    employeePosition: {
      positionId: 1,
      positionName: 'Lễ tân'
    },
    employeeDegree: {
      degreeId: 3,
      degreeName: 'Cao đẳng'
    },
    employeeDepart: {
      departId: 4,
      departName: 'Quản lý'
    },
  }];

  constructor() {
  }

  public findAll() {
    return this.employees;
  }

  public save(employee) {
    this.employees.push(employee);
  }

  public findById(id: number) {
    return this.employees.find(employee => employee.employeeId === id);
  }

  public update(id: number, employee: Employee) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].employeeId === id) {
        this.employees[i] = employee;
      }
    }
  }

  public deleteById(id: number) {
    this.employees = this.employees.filter(employee => {
      return employee.employeeId !== id;
    });
  }
}
