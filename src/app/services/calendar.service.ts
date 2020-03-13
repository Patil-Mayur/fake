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
        return this.todaysDate;
    }

    setCurrentDate(date) {
        this.currentDate.next(date);
    }

    getCurrentDate():BehaviorSubject<moment.Moment> {
        return this.currentDate;
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