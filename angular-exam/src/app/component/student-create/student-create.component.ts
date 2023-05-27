import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../../model/student';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onCreate = new EventEmitter<Student>();
  student: Student;
  rfStudent: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.rfStudent = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^[^!@#$%^&*()_+=0-9-]+$')
      ]),
      score: new FormControl('', [
        Validators.required,
        this.validationScore
      ])
    });
  }

  /**
   * Get input html
   */
  addStudent(name: string, score: string) {
    this.student = {
      name,
      score: +score
    };
    this.onCreate.emit(this.student);
  }

  /**
   * Custom validation
   */
  validationScore(control: AbstractControl): ValidationErrors | null {
    const score = +control.value;
    if (score < 0 || score > 10) {
      return {invalidScore: true};
    }
    return null;
  }
}
