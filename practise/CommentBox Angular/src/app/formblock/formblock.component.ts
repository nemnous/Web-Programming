import { Component, OnInit } from '@angular/core';
import {commentList} from '../commentList';
import {CommentServService} from '../comment-serv.service';

@Component({
  selector: 'app-formblock',
  templateUrl: './formblock.component.html',
  styleUrls: ['./formblock.component.css']
})
export class FormblockComponent implements OnInit {

  commentArr : commentList[] = new Array();
  name: string;
  comment: string;
  constructor(public commentObj:CommentServService) {
   }
  

  clicked() {
   this.name =  (<HTMLInputElement>document.getElementById("nameBox")).value;
   this.comment = (<HTMLInputElement>document.getElementById("commentBox")).value;
  //  this.commentArr.push();
   this.commentObj.pushM({name :this.name, comment : this.comment});
   (<HTMLFormElement>document.getElementById("formMan")).reset();
  }
  ngOnInit() {
  }
}
