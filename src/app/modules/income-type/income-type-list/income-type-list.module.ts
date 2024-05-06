import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeTypeListComponent } from './income-type-list.component';
import { ListModule } from '../../common/list/list.module';
import { MatListModule } from '@angular/material/list';
import { IncomeTypeListItemModule } from './income-type-list-item/income-type-list-item.module';

@NgModule({
  declarations: [IncomeTypeListComponent],
  imports: [CommonModule, ListModule, MatListModule, IncomeTypeListItemModule],
  exports: [IncomeTypeListComponent],
})
export class IncomeTypeListModule {}
