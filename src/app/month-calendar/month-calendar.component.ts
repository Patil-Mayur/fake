import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { CalendarService } from '../services/calendar.service';
import * as moment from 'moment';
@Component({
    selector: "month-calendar",
    templateUrl: "./month-calendar.component.html",
    styleUrls: ["./month-calendar.component.less"]
})
export class MonthCalendarComponent implements OnInit {

    constructor(private calendarService: CalendarService) {}

    daysOfWeek:string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    monthDates:moment.Moment[] = [];
    ngOnInit() {
        this.calendarService.getCurrentDate()
        .subscribe(date => {
            let sDate = date.clone().startOf('month').startOf('week');
            const eDate = date.clone().endOf('month').endOf('week');
            let arr = [];
            while(eDate.isSameOrAfter(sDate)) {
                arr.push(sDate.clone());
                sDate.add(1, 'day');
            }
            this.monthDates = arr;
        })
    }

}