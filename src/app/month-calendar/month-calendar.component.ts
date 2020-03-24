import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import {DateTime} from 'luxon';
import { LXCalendarService } from '../services/lx-calendar.service';
@Component({
    selector: "month-calendar",
    templateUrl: "./month-calendar.component.html",
    styleUrls: ["./month-calendar.component.less"]
})
export class MonthCalendarComponent implements OnInit {

    constructor(private calendarService: LXCalendarService) {}

    daysOfWeek:string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    monthDates:DateTime[] = [];
    ngOnInit() {
        this.calendarService.getCurrentDate()
        .subscribe(date => {
            let sDate = date.startOf('month').startOf('week');
            const eDate = date.endOf('month').endOf('week');
            let noOfDays = Math.round(eDate.diff(sDate, 'days').toObject().days);
            let arr = [sDate];
            let addDays = {days:1};
            while(--noOfDays) {
                sDate = sDate.plus(addDays);
                arr.push(sDate);
            }
            this.monthDates = arr;
        })
    }

}