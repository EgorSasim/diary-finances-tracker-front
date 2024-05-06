import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseTypeListComponent } from './expense-type-list.component';
import { ListModule } from '../../common/list/list.module';
import { MatListModule } from '@angular/material/list';
import { ExpenseTypeListItemModule } from './expense-type-list-item/expense-type-list-item.module';

@NgModule({
  declarations: [ExpenseTypeListComponent],
  imports: [CommonModule, ListModule, MatListModule, ExpenseTypeListItemModule],
  exports: [ExpenseTypeListComponent],
})
export class ExpenseTypeListModule {}
