import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount : number =4 ;
  btnText : string = "Add item values";
  goalText : string = "";
  goals = [];
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
