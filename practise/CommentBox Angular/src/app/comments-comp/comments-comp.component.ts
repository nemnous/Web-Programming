import { Component, OnInit } from '@angular/core';
import {CommentServService} from '../comment-serv.service';
import {commentList} from '../commentList';
@Component({
  selector: 'app-comments-comp',
  templateUrl: './comments-comp.component.html',
  styleUrls: ['./comments-comp.component.css']
})

export class CommentsCompComponent implements OnInit {
  
  constructor(public commentObj : CommentServService) { }
  commentArey : commentList[] = this.commentObj.commentArray;
  func() {
    console.log(this.commentArey);
  }
  ngOnInit() {
  }
}
