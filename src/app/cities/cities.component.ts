import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  newcity: any;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() enterCity = new EventEmitter<string>();

  sendCity($event){
    this.newcity = $event.target.innerHTML;
    console.log($event)
    this.enterCity.emit(this.newcity)
  }

}
