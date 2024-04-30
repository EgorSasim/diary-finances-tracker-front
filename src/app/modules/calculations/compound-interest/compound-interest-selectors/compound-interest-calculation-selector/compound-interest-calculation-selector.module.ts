import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundInterestCalculationSelectorComponent } from './compound-interest-calculation-selector.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CompoundInterestCalculationSelectorComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    TranslateModule,
    MatInputModule,
  ],
  exports: [CompoundInterestCalculationSelectorComponent],
})
export class CompoundInterestCalculationSelectorModule {}
