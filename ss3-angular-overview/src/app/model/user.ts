import {DatePipe} from '@angular/common';

export interface User {
  email?: string;
  password?: string;
  confirmPassword?: string;
  country?: string;
  date?: Date;
  gender?: string;
  phone?: string;
}
