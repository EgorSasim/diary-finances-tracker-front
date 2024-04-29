import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ExpensesPageChartComponent } from './expenses-page-chart.component';

@NgModule({
  declarations: [ExpensesPageChartComponent],
  imports: [CommonModule, NgxChartsModule],
  exports: [ExpensesPageChartComponent],
})
export class ExpensesPageChartModule {}
