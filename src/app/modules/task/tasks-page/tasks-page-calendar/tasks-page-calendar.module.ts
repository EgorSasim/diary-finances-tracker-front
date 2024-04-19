import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { TasksPageCalendarComponent } from './tasks-page-calendar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TasksPageCalendarComponent],
  imports: [
    CommonModule,
    CalendarModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
  ],
  exports: [TasksPageCalendarComponent],
})
export class TasksPageCalendarModule {}
