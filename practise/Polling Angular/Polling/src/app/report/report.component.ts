import { Component, OnInit, Input } from '@angular/core';
import {quesVar } from '../quesArr';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }
  ques = quesVar;
  ngOnInit() {
  }

}
