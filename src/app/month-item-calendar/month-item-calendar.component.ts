import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Moment } from 'moment';
import { CalendarService } from '../services/calendar.service';

@Component({
    selector: "month-item-calendar",
    templateUrl: "./month-item-calendar.component.html",
    styleUrls: ["./month-item-calendar.component.less"]
})
export class MonthItemCalendarComponent {

    @Input() monthDate:Moment;
    nzType:string = 'default';
    constructor(private calendarService: CalendarService) {}

    getDate() {
        const date = this.calendarService.getCurrentDateValue(this.monthDate);
        if(date === 1) {
            return `${this.calendarService.getMonthShort(this.monthDate)} ${date}`
        }
        return date;
    }

    isTodaysDate() {
        const todaysDate = this.calendarService.getTodaysDate().format('YYYY-MM-DD');
        const monthDate = this.monthDate.format('YYYY-MM-DD');
        return monthDate === todaysDate;
    }

    isCurrentMonth() {
        return this.calendarService.getMonthShort() === this.calendarService.getMonthShort(this.monthDate);
    }

}