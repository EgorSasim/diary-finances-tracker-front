import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseEditPageComponent } from './expense-edit-page.component';
import { EditPageModule } from '../../common/edit-page/edit-page.module';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { DateSelectorModule } from '../../common/date-selector/date-selector.module';
import { TextAreaModule } from '../../common/text-area/text-area.module';
import { TranslateModule } from '@ngx-translate/core';
import { ExpenseTypeSelectorModule } from '../../expense-type/expense-type-selector/expense-type-selector.module';

@NgModule({
  declarations: [ExpenseEditPageComponent],
  imports: [
    CommonModule,
    EditPageModule,
    MatFormField,
    MatInputModule,
    ReactiveFormsModule,
    ExpenseTypeSelectorModule,
    DateSelectorModule,
    TextAreaModule,
    TranslateModule,
  ],
})
export class ExpenseEditPageModule {}
