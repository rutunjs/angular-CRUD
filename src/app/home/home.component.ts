import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations : [
    trigger('goals',[
      transition('* => *',[
        query(':enter',style({opacity:0}),{optional : true}),
        query(':enter',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity:0,transition:'translateY(-75%)',offset:0}),
            style({opacity:0.5,transition:'translateY(35%)',offset:0.3}),
            style({opacity:1,transition:'translateY(0%)',offset:1}),
          ]))
        ]),{optional : true}),
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount : number =4 ;
  btnText : string = "Add item values";
  goalText : string = "";
  goals = ["rutunj","sheladiya","hey"];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    console.table;
    this.goals.push(this.goalText);
    this.goalText = "";
    this.itemCount = this.goals.length;
    
  }

}
