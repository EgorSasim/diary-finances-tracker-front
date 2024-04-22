import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageChartComponent } from './tasks-page-chart.component';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [TasksPageChartComponent],
  imports: [CommonModule, NgxChartsModule, FormsModule],
  exports: [TasksPageChartComponent],
})
export class TasksPageChartModule {}
