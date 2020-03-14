import { Component, Output, EventEmitter, OnInit, AfterViewInit } from "@angular/core";
import { CalendarService } from '../services/calendar.service';

@Component({
    selector: "calendar-header",
    templateUrl: "./calendar-header.component.html",
    styleUrls: ["./calendar-header.component.less"]
})
export class CalendarHeaderComponent implements OnInit, AfterViewInit {

    calendarRendererType:string;
    label:string = ''

    constructor(private calendarService: CalendarService) {
    }

    ngOnInit() {
        this.calendarService.getViewRenderType()
        .subscribe((viewType) => {
            this.calendarRendererType = viewType;
            this.updateLabel();
        });

        this.calendarService.getCurrentDate().subscribe( date => {
            this.updateLabel();
        });
        this.calendarRendererType = this.calendarService.getViewRenderType().getValue();
    }

    ngAfterViewInit() {
        this.updateLabel();
    }

    updateLabel() {
        switch(this.calendarRendererType) {
            case 'month':
                this.label = `${this.calendarService.getMonth()} ${this.calendarService.getYear()}`;
                break;
            default:
                this.label = `${this.calendarService.getMonth()} ${this.calendarService.getYear()}`;
        }
    }

    onRenderTypeChange(value) {
        this.calendarService.setViewRenderType(value);
    }

    moveLeft() {
        this.calendarService.subtractMonth();
    }

    moveRight() {
        this.calendarService.addMonth();
    }

    resetDate() {
        this.calendarService.setCurrentDate();
    }

}