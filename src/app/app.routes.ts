import { Routes } from '@angular/router';
import { AuthPageComponent } from './components/auth-page/auth-page.component';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: 'auth-page',
  },
  {
    path: 'auth-page',
    component: AuthPageComponent,
    loadChildren: () =>
      import('./components/auth-page/auth-page.module').then(
        (m) => m.AuthModule
      ),
  },
];
