import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  Space,
  SpaceSearchParams,
} from '../../../../services/space/space.typings';
import { SpacesPageListService } from './spaces-page-list.service';
import { Observable } from 'rxjs';
import { NavigationService } from '../../../../services/navigation/navigation.service';
import { Task } from '../../../../services/task/task.typings';
import { Note } from '../../../../services/note/note.typings';
import { CompletedTaskListItem } from '../../../task/task-list/task-list-item/task-list-item.typings';

@Component({
  selector: 'dft-spaces-page-list',
  templateUrl: './spaces-page-list.component.html',
  styleUrl: './spaces-page-list.component.scss',
  providers: [SpacesPageListService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacesPageListComponent {
  public spaces$: Observable<Space[]> =
    this.spacesPageListService.handleSpaces();

  constructor(private spacesPageListService: SpacesPageListService) {}

  public searchParamsChange(params: SpaceSearchParams): void {
    this.spacesPageListService.handleSearchParamsChange(params);
  }

  public goToSpaceEditPage(id: number): void {
    this.spacesPageListService.goToSpaceEditPage(id);
  }

  public removeSpace(id: number): void {
    this.spacesPageListService.removeSpace(id).subscribe();
  }

  public completeTask(item: CompletedTaskListItem): void {
    this.spacesPageListService.completeTask(item).subscribe();
  }
  public editTask(id: Task['id']): void {
    this.spacesPageListService.editTask(id);
  }
  public removeTask(id: Task['id']): void {
    this.spacesPageListService.removeTask(id).subscribe();
  }
  public editNote(id: Note['id']): void {
    this.spacesPageListService.editNote(id);
  }
  public removeNote(id: Note['id']): void {
    this.spacesPageListService.removeNote(id).subscribe();
  }
}
