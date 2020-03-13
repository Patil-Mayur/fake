import { Component, Output, EventEmitter } from "@angular/core";
import { CalendarService } from '../services/calendar.service';

@Component({
    selector: "calendar-header",
    templateUrl: "./calendar-header.component.html",
    styleUrls: ["./calendar-header.component.less"]
})
export class CalendarHeaderComponent {

    calendarRendererType = 'month';
    label:string = ''

    constructor(private calendarService: CalendarService) {
    }

    ngOnInit() {
        this.calendarService.getViewRenderType()
        .subscribe((viewType) => {
            this.calendarRendererType = viewType
        });

    }

    onRenderTypeChange(value) {
        this.calendarService.setViewRenderType(value);
    }

}