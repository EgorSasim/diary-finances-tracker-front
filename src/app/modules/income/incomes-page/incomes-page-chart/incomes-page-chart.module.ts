import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomesPageChartComponent } from './incomes-page-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [IncomesPageChartComponent],
  imports: [CommonModule, NgxChartsModule, TranslateModule],
  exports: [IncomesPageChartComponent],
})
export class IncomesPageChartModule {}
