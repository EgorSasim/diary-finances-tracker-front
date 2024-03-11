import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { SignInComponent } from './sign-in.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MatButtonModule,
  ],
  exports: [SignInComponent],
})
export class SignInModule {}
