import { Component } from '@angular/core';
import { ROUTE_PATH } from '../../../constants/routes-pathes';

@Component({
  selector: 'dft-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  public readonly homePagePath: string = ROUTE_PATH.home;
  public readonly tasksPagePath: string = ROUTE_PATH.tasksPage;
  public readonly notesPagePath: string = ROUTE_PATH.notesPage;
  public readonly spacesPagePath: string = ROUTE_PATH.spacesPage;
}
