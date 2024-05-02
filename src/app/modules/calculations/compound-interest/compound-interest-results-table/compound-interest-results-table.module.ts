import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundInterestResultsTableComponent } from './compound-interest-results-table.component';
import { CompoundInterestResultsTableItemModule } from './compound-interest-results-table-item/compound-interest-results-table-item.module';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CompoundInterestResultsTableComponent],
  imports: [
    CommonModule,
    CompoundInterestResultsTableItemModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    TranslateModule,
  ],
  exports: [CompoundInterestResultsTableComponent],
})
export class CompoundInterestResultsTableModule {}
