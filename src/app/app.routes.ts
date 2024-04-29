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
import { UserEditPageComponent } from './modules/user/user-edit-page/user-edit-page.component';
import { IncomesPageComponent } from './modules/income/incomes-page/incomes-page.component';
import { IncomeEditPageComponent } from './modules/income/income-edit-page/income-edit-page.component';
import { ExpensesPageComponent } from './modules/expense/expenses-page/expenses-page.component';
import { ExpenseEditPageComponent } from './modules/expense/expense-edit-page/expense-edit-page.component';

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
            path: ROUTE_PATH.incomesPage,
            component: IncomesPageComponent,
            loadChildren: () =>
              import('./modules/income/incomes-page/incomes-page.module').then(
                (m) => m.IncomesPageModule
              ),
          },
          {
            path: ROUTE_PATH.expensesPage,
            component: ExpensesPageComponent,
            loadChildren: () =>
              import(
                './modules/expense/expenses-page/expenses-page.module'
              ).then((m) => m.ExpensesPageModule),
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
        path: ROUTE_PATH.userEditPage,
        component: UserEditPageComponent,
        loadChildren: () =>
          import('./modules/user/user-edit-page/user-edit-page.module').then(
            (m) => m.UserEditPageModule
          ),
      },
      {
        path: `${ROUTE_PATH.incomeEditPage}/:id`,
        component: IncomeEditPageComponent,
        loadChildren: () =>
          import(
            './modules/income/income-edit-page/income-edit-page.module'
          ).then((m) => m.IncomeEditPageModule),
      },
      {
        path: `${ROUTE_PATH.expenseEditPage}/:id`,
        component: ExpenseEditPageComponent,
        loadChildren: () =>
          import(
            './modules/expense/expense-edit-page/expense-edit-page.module'
          ).then((m) => m.ExpenseEditPageModule),
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
