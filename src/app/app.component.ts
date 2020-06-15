import { Component, Input } from '@angular/core';

export interface Week{
  day: string
  tempDay: string
  tempNight: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  days: Week[] = [
    {day: 'Mon', tempDay: '37', tempNight: '25'},
    {day: 'Tue', tempDay: '33', tempNight: '22'},
    {day: 'Wed', tempDay: '31', tempNight: '27'},
    {day: 'Thu', tempDay: '37', tempNight: '21'},
    {day: 'Fri', tempDay: '26', tempNight: '15'},
    {day: 'Sat', tempDay: '35', tempNight: '26'}
  ]

}
