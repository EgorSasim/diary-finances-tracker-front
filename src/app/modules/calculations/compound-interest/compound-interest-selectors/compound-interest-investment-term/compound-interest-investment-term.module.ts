import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CompoundInterestInvestmentTermComponent } from './compound-interest-investment-term.component';

@NgModule({
  declarations: [CompoundInterestInvestmentTermComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [CompoundInterestInvestmentTermComponent],
})
export class CompoundInterestInvestmentTermModule {}
