import { Component, OnInit } from '@angular/core';
import { hero } from '../hero/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
 myhero:hero={
   id : 1,
   name:'windstorm'
 };
  constructor() { }

  ngOnInit() {
  }

}
