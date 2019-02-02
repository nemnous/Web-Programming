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

  choiceCount : string[];

  optclick(quesNo, chcNum) {
    let id1 = quesNo + "" + 1;
    let id2 = quesNo + "" + 2;
    (<HTMLInputElement> document.getElementById(id1)).disabled = true;
    (<HTMLInputElement> document.getElementById(id2)).disabled = true;
    if(chcNum == 1) {
      this.questionArr[quesNo].op1Count += 1;
    } else {
      this.questionArr[quesNo].op2Count += 1;
    }
  }
  ngOnInit() {
  }

}
