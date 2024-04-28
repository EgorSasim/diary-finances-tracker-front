import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomesPageListComponent } from './incomes-page-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { IncomeSearchPanelModule } from '../../income-search-panel/income-search-panel.module';
import { TranslateModule } from '@ngx-translate/core';
import { IncomeListModule } from '../../income-list/income-list.module';

@NgModule({
  declarations: [IncomesPageListComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    IncomeSearchPanelModule,
    TranslateModule,
    IncomeListModule,
  ],
  exports: [IncomesPageListComponent],
})
export class IncomesPageListModule {}
