import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageComponent } from './tasks-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TasksPageBoardModule } from './tasks-page-board/tasks-page-board.module';
import { TasksPageListModule } from './tasks-page-list/tasks-page-list.module';
import { TasksPageCalendarModule } from './tasks-page-calendar/tasks-page-calendar.module';
import { TasksPageChartModule } from './tasks-page-chart/tasks-page-chart.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TasksPageComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    TasksPageBoardModule,
    TasksPageListModule,
    TasksPageCalendarModule,
    TasksPageChartModule,
    TranslateModule,
    MatIconModule,
  ],
})
export class TasksPageModule {}
