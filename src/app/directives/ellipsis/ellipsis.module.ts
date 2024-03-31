import { NgModule } from '@angular/core';
import { EllipsisDirective } from './ellipsis.directive';

@NgModule({
  declarations: [EllipsisDirective],
  exports: [EllipsisDirective],
})
export class EllipsisModule {}
