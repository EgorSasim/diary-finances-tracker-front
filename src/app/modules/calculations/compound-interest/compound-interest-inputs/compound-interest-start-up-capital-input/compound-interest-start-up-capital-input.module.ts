import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundInterestStartUpCapitalInputComponent } from './compound-interest-start-up-capital-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CompoundInterestStartUpCapitalInputComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    TranslateModule,
    MatInputModule,
  ],
  exports: [CompoundInterestStartUpCapitalInputComponent],
})
export class CompoundInterestStartUpCapitalInputModule {}
