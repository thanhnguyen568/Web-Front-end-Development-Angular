import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-picker-color',
  templateUrl: './picker-color.component.html',
  styleUrls: ['./picker-color.component.css']
})
export class PickerColorComponent implements OnInit {
  background = '#00e067';

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(value) {
    this.background = value;
  }

}
