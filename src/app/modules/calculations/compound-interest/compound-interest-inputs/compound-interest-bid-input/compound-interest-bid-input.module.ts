import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundInterestBidInputComponent } from './compound-interest-bid-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CompoundInterestBidInputComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    TranslateModule,
    MatInputModule,
  ],
  exports: [CompoundInterestBidInputComponent],
})
export class CompoundInterestBidInputModule {}
