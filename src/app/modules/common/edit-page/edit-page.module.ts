import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPageComponent } from './edit-page.component';
import { EditHeaderModule } from '../../common/edit-header/edit-header.module';

@NgModule({
  declarations: [EditPageComponent],
  imports: [CommonModule, EditHeaderModule],
  exports: [EditPageComponent],
})
export class EditPageModule {}
