import { Component, OnInit, Input } from '@angular/core';
import {Week} from '../app.component'

@Component({
  selector: 'app-owl-item',
  templateUrl: './owl-item.component.html',
  styleUrls: ['./owl-item.component.css']
  
})
export class OwlItemComponent implements OnInit {
  dayOfWeek: any;

  @Input() week: Week


  constructor() { }

  ngOnInit() {
    this.GetWeekInfo();
  }
  GetWeekInfo(){
    console.log(this.week)
    this.dayOfWeek = this.week;
  }
}
