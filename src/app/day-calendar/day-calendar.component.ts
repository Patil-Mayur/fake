import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { LXCalendarService } from '../services/lx-calendar.service';

@Component({
    selector: "day-calendar",
    templateUrl: "./day-calendar.component.html",
    styleUrls: ["./day-calendar.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DayCalendarComponent implements OnInit {

    date = this.calendarService.getCurrentDate();
    offsetShort = this.calendarService.getOffsetShort();
    timeDetails = this.calendarService.getTimeInfo();

    constructor(private calendarService: LXCalendarService) {

    }

    ngOnInit() {
        
    }

    isTodaysDate() {
        const todaysDate = this.calendarService.getTodaysDate().toISODate();
        const currentDate = this.calendarService.getCurrentDate().getValue().toISODate();
        return currentDate === todaysDate;
    }

    calc(minutes) {
        return Math.max(minutes/1.25, 1);
    }


    overlap(aStart, aEnd, bStart, bEnd) {
        return (aStart < bEnd && bStart < aEnd);
    }
}