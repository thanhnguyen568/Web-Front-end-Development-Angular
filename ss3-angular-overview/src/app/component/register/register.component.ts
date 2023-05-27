import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {Country} from '../../model/country';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: User;
  countries: Country[] = [
    {name: '-none-'},
    {name: 'Việt Nam'},
    {name: 'Nhật'},
    {name: 'Mỹ'}
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.minLength(6)),
      confirmPassword: new FormControl('', Validators.minLength(6)),
      country: new FormControl('', Validators.required),
      age: new FormControl('', Validators.min(18)),
      gender: new FormControl('', Validators.required),
      // phone: new FormControl('', Validators.pattern('/^\\+84\\d{9,10}$/'))
    });
  }

  registerUser(email: string, password: string, confirmPassword: string, country: string, age: string, gender: string, phone: string) {
    this.user = {
      email, password, confirmPassword, country, age: +age, gender, phone
    };
    alert(this.user.gender);
  }
}
