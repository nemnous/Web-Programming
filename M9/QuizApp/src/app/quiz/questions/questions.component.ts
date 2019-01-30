import { Component, OnInit, Input } from '@angular/core';
import { SerService } from '../../ser.service'
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  status: boolean;
  @Input() quest: any;
  right= false
  wrong = false
  evaluate(selectedOp) {
    this.status=true;
    if(this.quest.correctAnswer === selectedOp) {
      this.right = true;
      this.wrong=false;
    } else {
      this.wrong = true;
      this.right=false;
    }
  }
  

}
