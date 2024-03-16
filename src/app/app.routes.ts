import { Routes } from '@angular/router';
import { AuthPageComponent } from './modules/auth-page/auth-page.component';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: 'auth-page',
  },
  {
    path: 'auth-page',
    component: AuthPageComponent,
    loadChildren: () =>
      import('./modules/auth-page/auth-page.module').then((m) => m.AuthModule),
  },
];
