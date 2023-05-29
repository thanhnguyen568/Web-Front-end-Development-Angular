import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {Country} from '../../model/country';
import {parseDate} from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: User;
  countries: Country[] = [
    {name: '---'},
    {name: 'Việt Nam'},
    {name: 'Nhật'},
    {name: 'Mỹ'}
  ];
  gender: undefined;
  password: undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required, this.checkDate]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})')])
      // name: new FormControl('', [Validators.required, Validators.pattern('[^!@#$%^&*()_+=0-9-]*')])
      // code: new FormControl('', [Validators.required, Validators.pattern('KH-\\w{4}')]),

    });
  }

  /**
   * Get to Input
   */
  registerUser(email: string, password: string, confirmPassword: string, country: string, date: Date, gender: string, phone: string) {
    this.user = {
      email, password, confirmPassword, country, date, gender, phone
    };
    alert(this.user.gender);
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
