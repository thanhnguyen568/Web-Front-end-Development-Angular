import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../model/student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  @Output()
  onCreate = new EventEmitter<Student>();
  studentCreate: Student;

  constructor() {
  }

  ngOnInit(): void {
  }

  addStudent(name: string, score: number) {
    this.studentCreate = {
      name,
      score
    };
    this.onCreate.emit(this.studentCreate);
  }
}
