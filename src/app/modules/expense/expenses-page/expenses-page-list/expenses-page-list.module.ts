import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesPageListComponent } from './expenses-page-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';
import { ExpenseListModule } from '../../expense-list/expense-list.module';
import { ExpenseSearchPanelModule } from '../../expense-search-panel/expense-search-panel.module';

@NgModule({
  declarations: [ExpensesPageListComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    ExpenseSearchPanelModule,
    TranslateModule,
    ExpenseListModule,
  ],
  exports: [ExpensesPageListComponent],
})
export class ExpensesPageListModule {}
