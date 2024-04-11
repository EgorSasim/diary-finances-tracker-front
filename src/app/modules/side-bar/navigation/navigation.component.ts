import { Component } from '@angular/core';
import {
  NOTES_PAGE_PATH,
  SPACES_PAGE_PATH,
  TASKS_PAGE_PATH,
} from './navigation.constants';

@Component({
  selector: 'dft-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  public readonly tasksPagePath: string[] = TASKS_PAGE_PATH;
  public readonly notesPagePath: string[] = NOTES_PAGE_PATH;
  public readonly spacesPagePath: string[] = SPACES_PAGE_PATH;
}
