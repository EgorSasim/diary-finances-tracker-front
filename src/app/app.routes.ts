import { Routes } from '@angular/router';
import { AuthPageComponent } from './modules/auth-page/auth-page.component';
import { HeaderComponent } from './modules/header/header.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { ROUTE_PATH } from './constants/routes-pathes';
import { SideBarComponent } from './modules/side-bar/side-bar.component';
import { TaskEditPageComponent } from './modules/task/task-edit-page/task-edit-page.component';
import { NoteEditPageComponent } from './modules/note/note-edit-page/note-edit-page.component';
import { SpaceEditPageComponent } from './modules/space/space-edit-page/space-edit-page.component';
import { TasksPageComponent } from './modules/task/tasks-page/tasks-page.component';
import { NotesPageComponent } from './modules/note/notes-page/notes-page.component';
import { SpacesPageComponent } from './modules/space/spaces-page/spaces-page.component';

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
            path: ROUTE_PATH.tasksPage,
            component: TasksPageComponent,
            loadChildren: () =>
              import('./modules/task/tasks-page/tasks-page.module').then(
                (m) => m.TasksPageModule
              ),
          },
          {
            path: ROUTE_PATH.notesPage,
            component: NotesPageComponent,
            loadChildren: () =>
              import('./modules/note/notes-page/notes-page.module').then(
                (m) => m.NotesPageModule
              ),
          },
          {
            path: ROUTE_PATH.spacesPage,
            component: SpacesPageComponent,
            loadChildren: () =>
              import('./modules/space/spaces-page/spaces-page.module').then(
                (m) => m.SpacesPageModule
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
        path: `${ROUTE_PATH.spaceEditPage}/:id`,
        component: SpaceEditPageComponent,
        loadChildren: () =>
          import('./modules/space/space-edit-page/space-edit-page.module').then(
            (m) => m.SpaceEditPageModule
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
