import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseSearchPanelComponent } from './expense-search-panel.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateSelectorModule } from '../../common/date-selector/date-selector.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ExpenseTypeSelectorModule } from '../../expense-type/expense-type-selector/expense-type-selector.module';

@NgModule({
  declarations: [ExpenseSearchPanelComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    DateSelectorModule,
    ExpenseTypeSelectorModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [ExpenseSearchPanelComponent],
})
export class ExpenseSearchPanelModule {}
