import { NgModule } from '@angular/core';
import { AuthPageComponent } from './auth-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeSelectorModule } from '../theme-selector/theme-selector.module';
import { AuthApiService } from '../../api/auth/auth-api.service';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    MatTabsModule,
    SignInModule,
    SignUpModule,
    TranslateModule,
    ThemeSelectorModule,
  ],
})
export class AuthModule {}
