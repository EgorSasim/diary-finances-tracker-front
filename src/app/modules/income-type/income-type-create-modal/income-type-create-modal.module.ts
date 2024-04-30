import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeTypeCreateModalComponent } from './income-type-create-modal.component';
import { CreateFormModule } from '../../common/create-form/create-form.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IncomeTypeCreateModalComponent],
  imports: [
    CommonModule,
    CreateFormModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [IncomeTypeCreateModalComponent],
})
export class IncomeTypeCreateModalModule {}
