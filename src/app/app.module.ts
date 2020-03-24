import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { IconDefinition } from '@ant-design/icons-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { LeftOutline, RightOutline } from '@ant-design/icons-angular/icons';
import { AppComponent } from './app.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { MonthCalendarComponent } from './month-calendar/month-calendar.component';
import { WeekCalendarComponent } from './week-calendar/week-calendar.component';
import { DayCalendarComponent } from './day-calendar/day-calendar.component';
import { CalendarBodyComponent } from './calendar-body/calendar-body.component';
import { MonthItemCalendarComponent } from './month-calendar/month-item-calendar/month-item-calendar.component';


const icons: IconDefinition[] = [ LeftOutline, RightOutline ];

@NgModule({
  declarations: [
    AppComponent,
    CalendarHeaderComponent,
    MonthCalendarComponent,
    WeekCalendarComponent,
    DayCalendarComponent,
    CalendarBodyComponent,
    MonthItemCalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NzIconModule,
    NzButtonModule,
    NzSelectModule
  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent],
  entryComponents: [MonthCalendarComponent, WeekCalendarComponent, DayCalendarComponent]
})
export class AppModule { }