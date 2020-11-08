import { Component, Input, OnInit } from "@angular/core";
import { DateTime } from 'luxon';
import { LXCalendarService } from '../../services/lx-calendar.service';

@Component({
    selector: "month-item-calendar",
    templateUrl: "./month-item-calendar.component.html",
    styleUrls: ["./month-item-calendar.component.less"]
})
export class MonthItemCalendarComponent implements OnInit {

    @Input() monthDate:DateTime;
    monthISODate;
    nzType:string = 'default';
    schedules = [];
    constructor(private calendarService: LXCalendarService) {}

    ngOnInit() {
        this.monthISODate = this.monthDate.toISODate();
       this.schedules = this.calendarService.getScheduledDatesForMonth().filter((schedule) => {
            return schedule.startTime.toISODate() === this.monthISODate;
        }); 
    }

    getDate() {
        const date = this.calendarService.getCurrentDateValue(this.monthDate);
        if(date === 1) {
            return `${this.calendarService.getMonthShort(this.monthDate)} ${date}`
        }
        return date;
    }

    isTodaysDate() {
        const todaysDate = this.calendarService.getTodaysDate().toISODate();
        return this.monthISODate === todaysDate;
    }

    isCurrentMonth() {
        return this.calendarService.getMonthShort() === this.calendarService.getMonthShort(this.monthDate);
    }
}