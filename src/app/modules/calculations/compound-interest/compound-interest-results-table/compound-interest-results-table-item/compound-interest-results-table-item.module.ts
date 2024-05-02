import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundInterestResultsTableItemComponent } from './compound-interest-results-table-item.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { ListModule } from '../../../../common/list/list.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [CompoundInterestResultsTableItemComponent],
  imports: [CommonModule, MatListModule, ListModule, MatDividerModule],
  exports: [CompoundInterestResultsTableItemComponent],
})
export class CompoundInterestResultsTableItemModule {}
