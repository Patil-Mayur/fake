import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {DateTime} from 'luxon';

@Injectable({
    providedIn: 'root'
})
export class LXCalendarService {

    private todaysDate; //holds todays date
    private currentDate = new BehaviorSubject<DateTime>(null);
    private calendarViewType = new BehaviorSubject<string>('month');

    public setTodaysDate(timeZone?:string) {
        if(!this.todaysDate) {
            if(timeZone) {
                this.todaysDate = DateTime.local().setZone(timeZone);
            } else {
                this.todaysDate = DateTime.local();
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
        return this.todaysDate;
    }

    setCurrentDate(date?:DateTime) {
        this.currentDate.next(date || this.getTodaysDate());
    }

    getCurrentDate():BehaviorSubject<DateTime> {
        return this.currentDate;
    }

    addMonth(months:number=1) {
        this.setCurrentDate(this.currentDate.getValue().plus({months: months}));
    }

    subtractMonth(months:number=1) {
        this.addMonth(months * -1);
    }

    getYearShort(date?:DateTime) {
        return (date || this.currentDate.getValue()).year.toString().substr(2);
    }

    getYear(date?:DateTime) {
        return (date || this.currentDate.getValue()).year;
    }

    getMonthShort(date?:DateTime) {
        return (date || this.currentDate.getValue()).monthShort;
    }

    getMonth(date?:DateTime) {
        return (date || this.currentDate.getValue()).monthLong;
    }

    getCurrentDay(date?:DateTime) {
        return (date || this.currentDate.getValue()).weekdayLong;
    }

    getCurrentDayShort(date?:DateTime) {
        return (date || this.currentDate.getValue()).weekdayShort;
    }

    getCurrentDateValue(date?:DateTime) {
        return (date || this.currentDate.getValue()).day;
    }

    getOffsetShort(date?:DateTime) {
        return (date || this.currentDate.getValue()).offsetNameShort
    }
}