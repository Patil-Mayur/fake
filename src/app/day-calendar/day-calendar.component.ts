import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { LXCalendarService } from '../services/lx-calendar.service';

@Component({
    selector: "day-calendar",
    templateUrl: "./day-calendar.component.html",
    styleUrls: ["./day-calendar.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DayCalendarComponent implements OnInit {

    day = this.calendarService.getCurrentDateValue();
    monthShort = this.calendarService.getMonthShort();
    weekDayShort = this.calendarService.getCurrentDayShort();
    offsetShort = this.calendarService.getOffsetShort();

    timeDetails = this.calendarService.getTimeInfo();

    scheduleList = [
        {eventName: "Event 1", eventId: 1, startTime: '', endTime: ''},
        {eventName: "Event 2", eventId: 2, startTime: '', endTime: ''},
        {eventName: "Event 3", eventId: 3, startTime: '', endTime: ''},
        {eventName: "Event 4", eventId: 4, startTime: '', endTime: ''},
        {eventName: "Event 5", eventId: 5, startTime: '', endTime: ''},
        {eventName: "Event 6", eventId: 6, startTime: '', endTime: ''},
        {eventName: "Event 7", eventId: 7, startTime: '', endTime: ''},
        {eventName: "Event 8", eventId: 8, startTime: '', endTime: ''},
        {eventName: "Event 9", eventId: 9, startTime: '', endTime: ''},
    ];

    constructor(private calendarService: LXCalendarService) {

    }

    ngOnInit() {
        
    }

    calc(minutes) {
        return Math.max(minutes/1.25, 1);
    }


    overlap(aStart, aEnd, bStart, bEnd) {
        return (aStart < bEnd && bStart < aEnd);
    }
}