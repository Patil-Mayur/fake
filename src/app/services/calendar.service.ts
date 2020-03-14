import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CalendarService {

    private todaysDate; //holds todays date
    private currentDate = new BehaviorSubject<moment.Moment>(null);
    private calendarViewType = new BehaviorSubject<string>('month');

    setTodaysDate(date?: moment.Moment) {
        if(!this.todaysDate) {        
            if(date) {
                this.todaysDate = date;
            } else {
                this.todaysDate = moment();
            }
        }
    }

    setViewRenderType(viewType:string) {
        this.calendarViewType.next(viewType);
    }

    getViewRenderType(): BehaviorSubject<string> {
        return this.calendarViewType;
    }

    getTodaysDate() {
        return this.todaysDate.clone();
    }

    setCurrentDate(date?:moment.Moment) {
        this.currentDate.next(date || this.getTodaysDate());
    }

    getCurrentDate():BehaviorSubject<moment.Moment> {
        return this.currentDate;
    }

    addMonth(months:number=1) {
        this.setCurrentDate(this.currentDate.getValue().add(months, 'months'));
    }

    subtractMonth(months:number=1) {
        this.setCurrentDate(this.currentDate.getValue().subtract(months, 'months'));
    }

    getYearShort(date?:moment.Moment) {
        return (date || this.currentDate.getValue()).format('YY');
    }

    getYear(date?:moment.Moment) {
        return (date || this.currentDate.getValue()).format('YYYY');
    }

    getMonthShort(date?:moment.Moment) {
        return (date || this.currentDate.getValue()).format('MMM');
    }

    getMonth(date?:moment.Moment) {
        return (date || this.currentDate.getValue()).format('MMMM');
    }

    getCurrentDay(date?:moment.Moment) {
        return (date || this.currentDate.getValue()).format('dddd');
    }

    getCurrentDayShort(date?:moment.Moment) {
        return (date || this.currentDate.getValue()).format('ddd');
    }

    getCurrentDateValue(date?:moment.Moment) {
        return (date || this.currentDate.getValue()).date();
    }

}