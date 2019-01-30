import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from '../mock-questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
questions = QUESTIONS;


  constructor() { }

  ngOnInit() {
  }

}
