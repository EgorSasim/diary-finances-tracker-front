import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ExpensesPageChartComponent } from './expenses-page-chart.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ExpensesPageChartComponent],
  imports: [CommonModule, NgxChartsModule, TranslateModule],
  exports: [ExpensesPageChartComponent],
})
export class ExpensesPageChartModule {}
