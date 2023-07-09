import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  inputValue: string = '';

  appendToInput(value: string | number): void {
    this.inputValue += value.toString();
  }
  handleButtonClick(value: string): void {
    if (value === 'AC') {
      this.clearData();
    } else {
      this.appendToInput(value);
    }
  }

  calculateResult(): void {
    this.inputValue = eval(this.inputValue).toString();
  }

  clearData(): void {
    this.inputValue = '';
  }

  constructor() { }

  ngOnInit(): void {
  }
  
}
