import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundInterestGrowthChartComponent } from './compound-interest-growth-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [CompoundInterestGrowthChartComponent],
  imports: [CommonModule, NgxChartsModule],
  exports: [CompoundInterestGrowthChartComponent],
})
export class CompoundInterestGrowthChartModule {}
