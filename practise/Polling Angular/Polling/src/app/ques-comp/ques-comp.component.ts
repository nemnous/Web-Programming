import { Component, OnInit } from '@angular/core';
import {quesVar } from '../quesArr';
@Component({
  selector: 'app-ques-comp',
  templateUrl: './ques-comp.component.html',
  styleUrls: ['./ques-comp.component.css']
})
export class QuesCompComponent implements OnInit {
  questionArr = quesVar;
  constructor() { }
  chc : string;
  optclick(quesNo, choice) {
    this.chc = choice;
    console.log(this.chc);
  }
  ngOnInit() {
  }

}
