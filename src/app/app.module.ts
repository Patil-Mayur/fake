import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppComponent } from './app.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { MonthCalendarComponent } from './month-calendar/month-calendar.component';
import { WeekCalendarComponent } from './week-calendar/week-calendar.component';
import { DayCalendarComponent } from './day-calendar/day-calendar.component';
import { CalendarBodyComponent } from './calendar-body/calendar-body.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarHeaderComponent,
    MonthCalendarComponent,
    WeekCalendarComponent,
    DayCalendarComponent,
    CalendarBodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NzButtonModule,
    NzSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MonthCalendarComponent, WeekCalendarComponent, DayCalendarComponent]
})
export class AppModule { }