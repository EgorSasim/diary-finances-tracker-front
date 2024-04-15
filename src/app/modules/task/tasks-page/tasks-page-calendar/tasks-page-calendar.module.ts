import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageCalendarComponent } from './tasks-page-calendar.component';

@NgModule({
  declarations: [TasksPageCalendarComponent],
  imports: [CommonModule],
  exports: [TasksPageCalendarComponent],
})
export class TasksPageCalendarModule {}
