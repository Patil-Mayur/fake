import { Component } from "@angular/core";
import { MonthCalendarComponent } from '../month-calendar/month-calendar.component';
import { WeekCalendarComponent } from '../week-calendar/week-calendar.component';
import { DayCalendarComponent } from '../day-calendar/day-calendar.component';
import { LXCalendarService } from '../services/lx-calendar.service';

@Component({
    selector: "calendar-body",
    templateUrl: "./calendar-body.component.html",
    styleUrls: ["./calendar-body.component.less"]
})
export class CalendarBodyComponent {

    calenderViewComponent;

    constructor(private calendarService: LXCalendarService) {}

    ngOnInit() {
        this.calendarService.getViewRenderType()
        .subscribe((viewType:string) => {
            if(viewType === 'day') {
                this.calenderViewComponent = DayCalendarComponent;
            } else if(viewType === 'week') {
                this.calenderViewComponent = WeekCalendarComponent;
            } else {
                this.calenderViewComponent = MonthCalendarComponent;
            }
        })
    }
   
}