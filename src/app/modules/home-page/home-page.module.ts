import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { TaskListModule } from '../task/task-list/task-list.module';
import { CreateEntityMenuButtonModule } from '../common/create-entity-menu-button/create-entity-menu-button.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    TaskListModule,
    CreateEntityMenuButtonModule,
    MatExpansionModule,
    TranslateModule,
    MatButtonModule,
  ],
})
export class HomePageModule {}
