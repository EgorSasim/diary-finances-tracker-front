import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeTypeEditPageComponent } from './income-type-edit-page.component';
import { EditPageModule } from '../../common/edit-page/edit-page.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [IncomeTypeEditPageComponent],
  imports: [
    CommonModule,
    EditPageModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    TranslateModule,
  ],
})
export class IncomeTypeEditPageModule {}
