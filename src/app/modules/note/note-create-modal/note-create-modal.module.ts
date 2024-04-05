import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteCreateModalComponent } from './note-create-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { TextAreaModule } from '../../common/text-area/text-area.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateFormModule } from '../../common/create-form/create-form.module';

@NgModule({
  declarations: [NoteCreateModalComponent],
  imports: [
    CommonModule,
    TranslateModule,
    TextAreaModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CreateFormModule,
  ],
  exports: [NoteCreateModalComponent],
})
export class NoteCreateModalModule {}
