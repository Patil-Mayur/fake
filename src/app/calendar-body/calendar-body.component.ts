import { Component, Output, EventEmitter } from "@angular/core";
import { CalendarService } from '../services/calendar.service';
import { MonthCalendarComponent } from '../month-calendar/month-calendar.component';
import { WeekCalendarComponent } from '../week-calendar/week-calendar.component';
import { DayCalendarComponent } from '../day-calendar/day-calendar.component';

@Component({
    selector: "calendar-body",
    templateUrl: "./calendar-body.component.html",
    styleUrls: ["./calendar-body.component.less"]
})
export class CalendarBodyComponent {

    calenderViewComponent;

    constructor(private calendarService: CalendarService) {}

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