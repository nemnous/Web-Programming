import { Injectable } from '@angular/core';
import {commentList} from './commentList';
@Injectable({
  providedIn: 'root'
})
export class CommentServService {
  commentArray : commentList[] = new Array();
  
  constructor() {
    
   }
   pushM(nani : commentList){
    this.commentArray.push(nani);
   }
}
