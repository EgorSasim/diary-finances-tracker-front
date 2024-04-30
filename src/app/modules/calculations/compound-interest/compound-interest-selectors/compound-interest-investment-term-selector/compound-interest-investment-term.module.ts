import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CompoundInterestInvestmentTermSelectorComponent } from './compound-interest-investment-term-selector.component';

@NgModule({
  declarations: [CompoundInterestInvestmentTermSelectorComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [CompoundInterestInvestmentTermSelectorComponent],
})
export class CompoundInterestInvestmentTermModule {}
