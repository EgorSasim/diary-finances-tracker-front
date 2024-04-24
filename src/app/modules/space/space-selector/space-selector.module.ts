import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceSelectorComponent } from './space-selector.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SpaceSelectorComponent],
  imports: [CommonModule, MatSelectModule, MatInputModule, ReactiveFormsModule],
  exports: [SpaceSelectorComponent],
})
export class SpaceSelectorModule {}
