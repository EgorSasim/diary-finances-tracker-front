import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditPageComponent } from './user-edit-page.component';
import { EditPageModule } from '../../common/edit-page/edit-page.module';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserEditPageComponent],
  imports: [
    CommonModule,
    EditPageModule,
    MatInputModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
})
export class UserEditPageModule {}
