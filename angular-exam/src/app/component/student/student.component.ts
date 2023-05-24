import {Component, OnInit} from '@angular/core';
import {Student} from '../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  date = new Date();
  students: Student[] = [
    {
      name: 'thanh',
      score: 10,
      vote: 1
    },
    {
      name: 'Lep',
      score: 9,
      vote: 0
    },
    {
      name: 'Ne',
      score: 8,
      vote: 1
    },
  ];
  studentDetail: Student = undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeStudent(student: Student) {
    this.studentDetail = student;
  }

  methodCreateStudent(student: Student) {
    this.students.push({...student, vote: 0});
  }
}
