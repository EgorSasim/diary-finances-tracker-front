import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceCreateModalComponent } from './space-create-modal.component';
import { CreateFormModule } from '../../common/create-form/create-form.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [SpaceCreateModalComponent],
  imports: [
    CommonModule,
    CreateFormModule,
    MatFormFieldModule,
    TranslateModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [SpaceCreateModalComponent],
})
export class SpaceCreateModalModule {}
