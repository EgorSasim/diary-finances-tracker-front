import { NgModule } from '@angular/core';
import { OverduedDirective } from './overdued.directive';

@NgModule({
  declarations: [OverduedDirective],
  exports: [OverduedDirective],
})
export class OverduedModule {}
