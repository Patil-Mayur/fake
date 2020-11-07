import { Component, OnInit, AfterViewInit } from "@angular/core";
import { LXCalendarService } from '../services/lx-calendar.service';

@Component({
    selector: "calendar-header",
    templateUrl: "./calendar-header.component.html",
    styleUrls: ["./calendar-header.component.less"]
})
export class CalendarHeaderComponent implements OnInit, AfterViewInit {

    calendarRendererType:string;
    label:string = ''

    constructor(private calendarService: LXCalendarService) {
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
                this.label = `${this.calendarService.getCurrentDateMonthHeaderLabel()}`;
                break;
            case 'day':
                this.label = `${this.calendarService.getCurrentDateDayHeaderLabel()}`;
                break;
            default:
                this.label = `${this.calendarService.getMonth()} ${this.calendarService.getYear()}`;
        }
    }

    onRenderTypeChange(value) {
        this.calendarService.setViewRenderType(value);
    }

    moveLeft() {
        switch(this.calendarRendererType) {
            case 'month': 
                this.calendarService.subtractMonth();
                break;
            case 'day':
                this.calendarService.subtractDays();
                break;
            default:
                this.calendarService.subtractMonth();
        }
    }

    moveRight() {
        switch(this.calendarRendererType) {
            case 'month': 
                this.calendarService.addMonth();
                break;
            case 'day':
                this.calendarService.addDays();
                break;
            default:
                this.calendarService.addMonth();
        }
    }

    resetDate() {
        this.calendarService.setCurrentDate();
    }

}