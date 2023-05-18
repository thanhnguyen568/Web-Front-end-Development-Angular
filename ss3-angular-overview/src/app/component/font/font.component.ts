import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.css']
})
export class FontComponent implements OnInit {
  fontSize = 12;

  fontSize2 = 12;

  changeFontSizeValue(fontSize2) {
    this.fontSize2 = fontSize2;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
