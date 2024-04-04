import { NgModule } from '@angular/core';
import { CompletedDirective } from './completed.directive';

@NgModule({
  declarations: [CompletedDirective],
  exports: [CompletedDirective],
})
export class CompletedModule {}
