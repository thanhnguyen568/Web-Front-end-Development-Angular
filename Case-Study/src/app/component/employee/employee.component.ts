import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {EmployeeService} from '../../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  employee: Employee;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employees = this.employeeService.findAll();
  }

  getEmployee(employeeId: number) {
    this.employee = this.employeeService.findById(+employeeId);
  }

  removeEmployee() {
    this.employee = this.employeeService.findById(+this.employee.employeeId);
    this.employeeService.deleteById(+this.employee.employeeId);
    this.employees = this.employeeService.findAll();
  }
}
