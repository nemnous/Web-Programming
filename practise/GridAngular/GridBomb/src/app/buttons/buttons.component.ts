import { Component, OnInit } from '@angular/core';
// import { button} from './button';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  nums = [1,2,3];
  k = 0;
  clicked() {
    window.alert("nani");
  }
  constructor() { 
  }  
}
