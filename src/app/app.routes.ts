import { Routes } from '@angular/router';
import { AuthPageComponent } from './modules/auth-page/auth-page.component';
import { HeaderComponent } from './modules/header/header.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { ROUTE_PATH } from './constants/routes-pathes';
import { SideBarComponent } from './modules/side-bar/side-bar.component';
import { TaskEditPageComponent } from './modules/task/task-edit-page/task-edit-page.component';
import { NoteEditPageComponent } from './modules/note/note-edit-page/note-edit-page.component';

export const routes: Routes = [
  {
    path: ROUTE_PATH.auth,
    component: AuthPageComponent,
    loadChildren: () =>
      import('./modules/auth-page/auth-page.module').then((m) => m.AuthModule),
  },
  {
    path: ROUTE_PATH.withHeader,
    component: HeaderComponent,
    children: [
      {
        path: ROUTE_PATH.withSideBar,
        component: SideBarComponent,
        children: [
          {
            path: ROUTE_PATH.home,
            component: HomePageComponent,
            loadChildren: () =>
              import('./modules/home-page/home-page.module').then(
                (m) => m.HomePageModule
              ),
          },
          {
            path: '**',
            pathMatch: 'full',
            redirectTo: ROUTE_PATH.home,
          },
        ],
      },
      {
        path: `${ROUTE_PATH.taskEditPage}/:id`,
        component: TaskEditPageComponent,
        loadChildren: () =>
          import('./modules/task/task-edit-page/task-edit-page.module').then(
            (m) => m.TaskEditPageModule
          ),
      },
      {
        path: `${ROUTE_PATH.noteEditPage}/:id`,
        component: NoteEditPageComponent,
        loadChildren: () =>
          import('./modules/note/note-edit-page/note-edit-page.module').then(
            (m) => m.NoteEditPageModule
          ),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: ROUTE_PATH.withSideBar,
      },
    ],
  },
  {
    path: '**',
    redirectTo: ROUTE_PATH.auth,
  },
];
