import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [MatToolbarModule, RouterOutlet],
  exports: [HeaderComponent],
})
export class HeaderModule {}
