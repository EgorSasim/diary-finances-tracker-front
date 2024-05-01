import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundInterestAnalysisChartComponent } from './compound-interest-analysis-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [CompoundInterestAnalysisChartComponent],
  imports: [CommonModule, NgxChartsModule],
  exports: [CompoundInterestAnalysisChartComponent],
})
export class CompoundInterestAnalysisChartModule {}
