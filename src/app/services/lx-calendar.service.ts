import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {DateTime} from 'luxon';

@Injectable({
    providedIn: 'root'
})
export class LXCalendarService {

    private todaysDate; //holds todays date
    private currentDate = new BehaviorSubject<DateTime>(null);
    private calendarViewType = new BehaviorSubject<string>('day');

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

    getCurrentDateDayHeaderLabel() {
        return this.currentDate.getValue().toFormat('DDD')
    }

    getCurrentDateMonthHeaderLabel() {
        return this.currentDate.getValue().toFormat('LLLL y')
    }

    getCurrentDate():BehaviorSubject<DateTime> {
        return this.currentDate;
    }

    addMonth(months:number=1) {
        this.setCurrentDate(this.currentDate.getValue().plus({months: months}));
    }

    addDays(days:number=1) {
        this.setCurrentDate(this.currentDate.getValue().plus({days}));
    }

    subtractDays(days:number=1) {
        this.addDays(days * -1);
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

    getTimeInfo() {
        return [
            '12 AM','1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM',
            '12 PM','1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
        ];
    }


    getScheduledDatesForMonth() {
        let scheduledList = [];
        for(let i = 0; i < 12; i++) {
            let padding =  parseInt((Math.random() * 100).toString()) % 20;
            let date = this.currentDate.getValue().plus({days:padding});
            scheduledList.push({
                startTime: date,
                endTime: date.plus({minutes:padding}),
                eventId: i,
                eventName: `Event ${i}`
            });
        }
        return scheduledList;
    }
}