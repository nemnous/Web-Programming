import { Component, Output } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {

  title = 'Bomb Game';
  // arr : button[] 
  first :string;
  last :string;
  show : boolean = false;
  bombId : any;
  checkName() {
    this.first = (<HTMLInputElement>document.getElementById("fname")).value;
    this.last = (<HTMLInputElement>document.getElementById("lname")).value;
    if(this.first == "" || this.last == "") {
      alert("Enter Name");
    } else {
      this.show = true;
      this.bombId = (Math.floor(Math.random() * 3) + 1) + "" + (Math.floor(Math.random() * 3) + 1);
      console.log(this.bombId);
    }
  }
  receiveMessage(temp) {
    alert(temp);
    console.log(temp);
    this.show =temp;
  }

}


