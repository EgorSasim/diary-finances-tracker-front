import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseListComponent } from './expense-list.component';
import { ListModule } from '../../common/list/list.module';
import { ExpenseListItemModule } from './expense-list-item/expense-list-item.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ExpenseListComponent],
  imports: [CommonModule, ListModule, ExpenseListItemModule, MatListModule],
  exports: [ExpenseListComponent],
})
export class ExpenseListModule {}
