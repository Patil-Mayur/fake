import { Component } from '@angular/core';
import { MonthCalendarComponent } from './month-calendar/month-calendar.component';
import { WeekCalendarComponent } from './week-calendar/week-calendar.component';
import { DayCalendarComponent } from './day-calendar/day-calendar.component';
import * as moment from 'moment';
import { CalendarService } from './services/calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private calendarService: CalendarService) {
    this.calendarService.setTodaysDate();
    this.calendarService.setCurrentDate(this.calendarService.getTodaysDate());
  }

  ngOnInit() {
    
  }

}
