import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesPageComponent } from './expenses-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { CreateTrackerEntityMenuButtonModule } from '../../common/create-tracker-entity-menu-button/create-tracker-entity-menu-button.module';
import { ExpensesPageListModule } from './expenses-page-list/expenses-page-list.module';
import { ExpensesPageChartModule } from './incomes-page-chart/expenses-page-chart.module';

@NgModule({
  declarations: [ExpensesPageComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatTabsModule,
    MatIconModule,
    CreateTrackerEntityMenuButtonModule,
    ExpensesPageListModule,
    ExpensesPageChartModule,
  ],
})
export class ExpensesPageModule {}
