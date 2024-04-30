import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeEditPageComponent } from './income-edit-page.component';
import { EditPageModule } from '../../common/edit-page/edit-page.module';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { IncomeTypeSelectorModule } from '../../income-type/income-type-selector/income-type-selector.module';
import { DateSelectorModule } from '../../common/date-selector/date-selector.module';
import { TextAreaModule } from '../../common/text-area/text-area.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [IncomeEditPageComponent],
  imports: [
    CommonModule,
    EditPageModule,
    MatFormField,
    MatInputModule,
    ReactiveFormsModule,
    IncomeTypeSelectorModule,
    DateSelectorModule,
    TextAreaModule,
    TranslateModule,
  ],
})
export class IncomeEditPageModule {}
