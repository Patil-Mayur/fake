import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as luxon from 'luxon';

@Injectable({
    providedIn: 'root'
})
export class LXCalendarService {

    private todaysDate; //holds todays date
    private currentDate = new BehaviorSubject<luxon.DateTime>(null)//= new BehaviorSubject<moment.Moment>(null);
    private calendarViewType = new BehaviorSubject<string>('month');

    public setTodaysDate(timeZone?:string) {
        if(!this.todaysDate) {
            if(timeZone) {
                this.todaysDate = luxon.DateTime.local().setZone(timeZone);
            } else {
                this.todaysDate = luxon.DateTime.local();
            }
        }
    }

    public setViewRenderType(viewType:string) {
        this.calendarViewType.next(viewType);
    }

    getViewRenderType(): BehaviorSubject<string> {
        return this.calendarViewType;
    }

    getTodaysDate() {
        return this.todaysDate.clone();
    }

    setCurrentDate(date?:luxon.DateTime) {
        this.currentDate.next(date || this.getTodaysDate());
    }

    getCurrentDate():BehaviorSubject<luxon.DateTime> {
        return this.currentDate;
    }

    addMonth(months:number=1) {
        this.setCurrentDate(this.currentDate.getValue().plus({months: months}));
    }

    subtractMonth(months:number=1) {
        this.addMonth(months * -1);
    }

    getYearShort(date?:luxon.DateTime) {
        return (date || this.currentDate.getValue()).;
    }

    getYear(date?:luxon.DateTime) {
        return (date || this.currentDate.getValue()).year;
    }

    getMonthShort(date?:luxon.DateTime) {
        return (date || this.currentDate.getValue()).monthShort;
    }

    getMonth(date?:luxon.DateTime) {
        return (date || this.currentDate.getValue()).monthLong;
    }

    getCurrentDay(date?:luxon.DateTime) {
        return (date || this.currentDate.getValue()).weekdayLong;
    }

    getCurrentDayShort(date?:luxon.DateTime) {
        return (date || this.currentDate.getValue()).weekdayShort;
    }

    getCurrentDateValue(date?:luxon.DateTime) {
        return (date || this.currentDate.getValue()).day;
    }

    getOffsetShort(date?:luxon.DateTime) {
        return (date || this.currentDate.getValue()).offsetNameShort
    }
}