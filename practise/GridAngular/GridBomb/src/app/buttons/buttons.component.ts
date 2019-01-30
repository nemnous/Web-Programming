import { Component, OnInit } from '@angular/core';
// import { button} from './button';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  nums = [];  
  constructor() { 
    this.nums = Array(3).fill(4);
  }
  
}
