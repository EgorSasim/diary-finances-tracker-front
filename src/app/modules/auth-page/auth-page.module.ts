import { NgModule } from '@angular/core';
import { AuthPageComponent } from './auth-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeSelectorModule } from '../theme-selector/theme-selector.module';
import { SpinnerModule } from '../common/spinner/spinner.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    MatTabsModule,
    SignInModule,
    SignUpModule,
    TranslateModule,
    ThemeSelectorModule,
    SpinnerModule,
    CommonModule,
  ],
})
export class AuthModule {}
