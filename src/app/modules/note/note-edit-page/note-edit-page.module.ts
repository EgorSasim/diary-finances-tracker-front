import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteEditPageComponent } from './note-edit-page.component';
import { EditPageModule } from '../../common/edit-page/edit-page.module';
import { SpinnerModule } from '../../common/spinner/spinner.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { TextAreaModule } from '../../common/text-area/text-area.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [NoteEditPageComponent],
  imports: [
    CommonModule,
    EditPageModule,
    SpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    TranslateModule,
    TextAreaModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [NoteEditPageComponent],
})
export class NoteEditPageModule {}
