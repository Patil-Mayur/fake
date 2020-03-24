import { Component, Input } from "@angular/core";
import { DateTime } from 'luxon';
import { LXCalendarService } from '../services/lx-calendar.service';

@Component({
    selector: "month-item-calendar",
    templateUrl: "./month-item-calendar.component.html",
    styleUrls: ["./month-item-calendar.component.less"]
})
export class MonthItemCalendarComponent {

    @Input() monthDate:DateTime;
    nzType:string = 'default';
    constructor(private calendarService: LXCalendarService) {}

    getDate() {
        const date = this.calendarService.getCurrentDateValue(this.monthDate);
        if(date === 1) {
            return `${this.calendarService.getMonthShort(this.monthDate)} ${date}`
        }
        return date;
    }

    isTodaysDate() {
        const todaysDate = this.calendarService.getTodaysDate().toISODate();
        const monthDate = this.monthDate.toISODate();
        return monthDate === todaysDate;
    }

    isCurrentMonth() {
        return this.calendarService.getMonthShort() === this.calendarService.getMonthShort(this.monthDate);
    }

}