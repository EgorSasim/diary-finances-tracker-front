import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseTypeCreateModalComponent } from './expense-type-create-modal.component';
import { CreateFormModule } from '../../common/create-form/create-form.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExpenseTypeCreateModalComponent],
  imports: [
    CommonModule,
    CreateFormModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [ExpenseTypeCreateModalComponent],
})
export class ExpenseTypeCreateModalModule {}
