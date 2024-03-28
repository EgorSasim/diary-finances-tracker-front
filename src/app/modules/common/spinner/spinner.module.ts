import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [MatProgressSpinnerModule],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
