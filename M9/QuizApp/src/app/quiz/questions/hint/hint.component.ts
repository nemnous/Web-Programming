import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {

  constructor() { }
  id=0;
  showHide:boolean;
  ngOnInit() {
  }
  @Input() hints: any;
  unhide() {
    this.showHide = true;
  }
  hide() {
    this.id=0;
    this.showHide=false;
  }

}
