import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { button} from './button';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html' ,
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  nums = [1,2,3];
  k = 0;
  @Input() bomb;
  @Output() messageEvent = new EventEmitter<boolean>();
  showDiv :boolean;
  clicked(that) {
    if(that == this.bomb) {
      alert("Bomb");
      document.getElementById("game");
      this.sendMessage();
    } else {
      
    }
  }
  sendMessage() {
    this.messageEvent.emit(false);
  }
  constructor() { 
  }  
}
