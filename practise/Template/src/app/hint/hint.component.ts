import { Component, OnInit, Input } from '@angular/core';
import { QUESTIONS } from '../mock-questions';
import { Questions } from '../questions';


@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {
questions = QUESTIONS;
@Input() ind;
@Input() h;
inde;
  constructor() {
  this.inde = 0;
   }

  ngOnInit() {
  }
   onClick() {
  	this.inde++;

  }

}
