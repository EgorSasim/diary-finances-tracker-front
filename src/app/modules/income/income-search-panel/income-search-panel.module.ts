import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeSearchPanelComponent } from './income-search-panel.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateSelectorModule } from '../../common/date-selector/date-selector.module';
import { IncomeTypeSelectorModule } from '../../common/income-type-selector/income-type-selector.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [IncomeSearchPanelComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    DateSelectorModule,
    IncomeTypeSelectorModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [IncomeSearchPanelComponent],
})
export class IncomeSearchPanelModule {}
