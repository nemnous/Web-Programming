import { Injectable } from '@angular/core';
import { que } from './json';
@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor() { }
  getQuestions(): any {
    return que;
  }

  getHints(num: any): any {
    return que[num].hint;
  }
}
