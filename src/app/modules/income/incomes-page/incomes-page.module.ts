import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomesPageComponent } from './incomes-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { CreateTrackerEntityMenuButtonModule } from '../../common/create-tracker-entity-menu-button/create-tracker-entity-menu-button.module';
import { IncomesPageListModule } from './incomes-page-list/incomes-page-list.module';
import { IncomesPageChartModule } from './incomes-page-chart/incomes-page-chart.module';

@NgModule({
  declarations: [IncomesPageComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatTabsModule,
    MatIconModule,
    CreateTrackerEntityMenuButtonModule,
    IncomesPageListModule,
    IncomesPageChartModule,
  ],
})
export class IncomesPageModule {}
