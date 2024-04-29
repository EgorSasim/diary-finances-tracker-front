import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomesPageChartComponent } from './incomes-page-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [IncomesPageChartComponent],
  imports: [CommonModule, NgxChartsModule],
  exports: [IncomesPageChartComponent],
})
export class IncomesPageChartModule {}
