import { Component, OnInit, Input } from '@angular/core';
import { QUESTIONS } from '../mock-questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
questions = QUESTIONS;
flag:string[]=[];
flag2:string[]=[];
@Input() id;


  constructor() { }

  ngOnInit() {
  }

   onSelect(q:string,i:number){
	if(q==this.questions[i].option1){
		this.flag[i]="alert alert-info";
		this.flag2[i]="0";
	} else if (q==this.questions[i].option2){
		this.flag[i]="alert alert-info";
		this.flag2[i]="1";
	}
  }


}
