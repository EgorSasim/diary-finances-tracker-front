import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeCreateModalComponent } from './income-create-modal.component';
import { CreateFormModule } from '../../common/create-form/create-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextAreaModule } from '../../common/text-area/text-area.module';
import { IncomeTypeSelectorModule } from '../../income-type/income-type-selector/income-type-selector.module';
import { DateSelectorModule } from '../../common/date-selector/date-selector.module';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [IncomeCreateModalComponent],
  imports: [
    CommonModule,
    CreateFormModule,
    ReactiveFormsModule,
    TranslateModule,
    MatFormFieldModule,
    TextAreaModule,
    IncomeTypeSelectorModule,
    DateSelectorModule,
    MatInputModule,
  ],
  exports: [IncomeCreateModalComponent],
})
export class IncomeCreateModalModule {}
