import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundExtraInvestmentsInputComponent } from './compound-extra-investments-input.component';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [CompoundExtraInvestmentsInputComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    TranslateModule,
    MatInputModule,
  ],
  exports: [CompoundExtraInvestmentsInputComponent],
})
export class CompoundExtraInvestmentsInputModule {}
