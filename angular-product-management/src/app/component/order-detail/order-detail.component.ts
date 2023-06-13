import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  columns: string[] = ['Column 1', 'Column 2', 'Column 3']; // Replace with your column names
  rows: string[][] = [
    ['', '', ''], // Initial row with empty values
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addRow() {
    debugger
    const newRow: string[] = Array(this.columns.length).fill('');
    this.rows.push(newRow);
    console.log(this.rows);
  }

  delRow(rowIndex: number) {
    this.rows.splice(rowIndex, 1);
  }
}
