import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';

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
      vote: 1,
      isSelected: false
    },
    {
      name: 'Lep',
      score: 9,
      vote: 0,
      isSelected: false
    },
    {
      name: 'Ne',
      score: 8,
      vote: 1,
      isSelected: false
    },
  ];
  studentDetail: Student = undefined;
  masterSelected: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  showStudent(student: Student) {
    this.studentDetail = student;
  }

  createStudent(student: Student) {
    this.students.push({...student, vote: 0});
  }

  checkUncheckAll() {
    this.students.forEach(student => {
      // @ts-ignore
      student.isSelected = this.masterSelected;
    });
  }

  isAllSelected() {
    this.masterSelected = this.students.every(student =>  {
      // @ts-ignore
      return student.isSelected === true;
    });
  }
}
