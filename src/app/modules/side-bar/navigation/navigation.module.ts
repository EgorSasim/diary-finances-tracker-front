import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    TranslateModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [NavigationComponent],
})
export class NavigationModule {}
