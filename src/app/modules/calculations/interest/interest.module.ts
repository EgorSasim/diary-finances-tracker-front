import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestComponent } from './interest.component';
import { InterestSelectorModule } from './interest-selector/interest-selector.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [InterestComponent],
  imports: [
    CommonModule,
    InterestSelectorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    TranslateModule,
    MatButtonModule,
  ],
  exports: [InterestComponent],
})
export class InterestModule {}
