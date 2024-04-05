import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form.component';
import { MatButton } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CreateFormComponent],
  imports: [CommonModule, MatButton, TranslateModule],
  exports: [CreateFormComponent],
})
export class CreateFormModule {}
