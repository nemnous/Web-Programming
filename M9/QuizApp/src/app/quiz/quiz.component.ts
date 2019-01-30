import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(public dataservice: SerService) { }

  ngOnInit() {
  }
  title1="Quiz start";
  title2="Quiz end";
  tit = this.dataservice.getQuestions();
}
