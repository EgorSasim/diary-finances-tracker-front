import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeListComponent } from './income-list.component';
import { ListModule } from '../../common/list/list.module';
import { IncomeListItemModule } from './income-list-item/income-list-item.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [IncomeListComponent],
  imports: [CommonModule, ListModule, IncomeListItemModule, MatListModule],
  exports: [IncomeListComponent],
})
export class IncomeListModule {}
