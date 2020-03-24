import { Component } from '@angular/core';
import { LXCalendarService } from './services/lx-calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private calendarService: LXCalendarService) {
    this.calendarService.setTodaysDate();
    this.calendarService.setCurrentDate(this.calendarService.getTodaysDate());
  }

  ngOnInit() {
    
  }

}
