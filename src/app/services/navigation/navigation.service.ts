import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../../constants/routes-pathes';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  constructor(private router: Router) {}

  public goToAuthPage(): void {
    this.router.navigate([ROUTE_PATH.auth]);
  }

  public goToHomePage(): void {
    this.router.navigate([ROUTE_PATH.withHeader, ROUTE_PATH.home]);
  }

  public goToTasksPage(): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.withSideBar,
      ROUTE_PATH.tasksPage,
    ]);
  }

  public goToNotesPage(): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.withSideBar,
      ROUTE_PATH.notesPage,
    ]);
  }

  public goToSpacesPage(): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.withSideBar,
      ROUTE_PATH.spacesPage,
    ]);
  }

  public goToTaskEditPage(id: number): void {
    this.router.navigate([ROUTE_PATH.withHeader, ROUTE_PATH.taskEditPage, id]);
  }

  public goToNoteEditPage(id: number): void {
    this.router.navigate([ROUTE_PATH.withHeader, ROUTE_PATH.noteEditPage, id]);
  }

  public goToSpaceEditPage(id: number): void {
    this.router.navigate([ROUTE_PATH.withHeader, ROUTE_PATH.spaceEditPage, id]);
  }
}
