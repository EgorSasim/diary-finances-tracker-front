import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxMaterialThemingModule } from '@lithiumjs/ngx-material-theming';
import { SnackBarModule } from './modules/common/snack-bar/snack-bar.module';
import {
  TranslateCompiler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { httpErrorInterceptorToken } from './interceptors/http-error.interceptor';
import { routes } from './app.routes';
import { ThemeSelectorModule } from './modules/theme-selector/theme-selector.module';
import { Languages } from './modules/language-selector/language-selector.constants';
import { tokenInterceptorToken } from './interceptors/token.interceptor';
import { HeaderModule } from './modules/header/header.module';
import { SideBarModule } from './modules/side-bar/side-bar.module';
import { ModalsModule } from './modals.module';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatSidenavModule } from '@angular/material/sidenav';

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    MatSidenavModule,
    HeaderModule,
    SideBarModule,
    ModalsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CommonModule,
    NgxMaterialThemingModule,
    SnackBarModule,
    BrowserModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler,
      },
      defaultLanguage: Languages.Ru,
    }),
    NgxChartsModule,
    ThemeSelectorModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    tokenInterceptorToken,
    httpErrorInterceptorToken,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
