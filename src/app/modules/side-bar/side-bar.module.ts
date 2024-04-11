import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarComponent } from './side-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { DiaryAccordionModule } from './diary-accordion/diary-accordion.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    DiaryAccordionModule,
    NavigationModule,
  ],
})
export class SideBarModule {}
