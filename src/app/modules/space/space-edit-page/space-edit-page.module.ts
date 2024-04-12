import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceEditPageComponent } from './space-edit-page.component';
import { EditPageModule } from '../../common/edit-page/edit-page.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [SpaceEditPageComponent],
  imports: [
    CommonModule,
    EditPageModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    TranslateModule,
    MatInputModule,
  ],
})
export class SpaceEditPageModule {}
