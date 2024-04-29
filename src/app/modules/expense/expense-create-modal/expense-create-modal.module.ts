import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseCreateModalComponent } from './expense-create-modal.component';
import { CreateFormModule } from '../../common/create-form/create-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextAreaModule } from '../../common/text-area/text-area.module';
import { DateSelectorModule } from '../../common/date-selector/date-selector.module';
import { MatInputModule } from '@angular/material/input';
import { ExpenseTypeSelectorModule } from '../expense-type-selector/expense-type-selector.module';

@NgModule({
  declarations: [ExpenseCreateModalComponent],
  imports: [
    CommonModule,
    CreateFormModule,
    ReactiveFormsModule,
    TranslateModule,
    MatFormFieldModule,
    TextAreaModule,
    ExpenseTypeSelectorModule,
    DateSelectorModule,
    MatInputModule,
  ],
  exports: [ExpenseCreateModalComponent],
})
export class ExpenseCreateModalModule {}
