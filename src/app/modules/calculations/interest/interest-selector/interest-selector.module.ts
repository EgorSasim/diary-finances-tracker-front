import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestSelectorComponent } from './interest-selector.component';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InterestSelectorComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    TranslateModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  exports: [InterestSelectorComponent],
})
export class InterestSelectorModule {}
