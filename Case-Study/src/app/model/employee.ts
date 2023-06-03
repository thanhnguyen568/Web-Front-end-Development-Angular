import {Degree} from './degree';
import {Depart} from './depart';
import {Position} from './position';

export interface Employee {
  employeeId?: number;
  employeeName?: string;
  employeeDateOfBirth?: string;
  employeeIdCard?: string;
  employeePhone?: number;
  employeeEmail?: string;
  employeeAddress?: string;
  employeeSalary?: number;
  employeePosition?: Position;
  employeeDegree?: Degree;
  employeeDepart?: Depart;
}
