import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceSelectorComponent } from './space-selector.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SpaceSelectorComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [SpaceSelectorComponent],
})
export class SpaceSelectorModule {}
