import { Injectable } from '@angular/core';
import { SpaceService } from '../../../../services/space/space.service';
import { Observable, ReplaySubject, merge, startWith, switchMap } from 'rxjs';
import {
  Space,
  SpaceSearchParams,
} from '../../../../services/space/space.typings';
import { TaskService } from '../../../../services/task/task.service';
import { NoteService } from '../../../../services/note/note.service';
import { Task } from '../../../../services/task/task.typings';
import { Note } from '../../../../services/note/note.typings';
import { NavigationService } from '../../../../services/navigation/navigation.service';
import { CompletedTaskListItem } from '../../../task/task-list/task-list-item/task-list-item.typings';

@Injectable()
export class SpacesPageListService {
  private searchParams$: ReplaySubject<SpaceSearchParams> = new ReplaySubject(
    1
  );

  private prevSearchParamsValue: SpaceSearchParams = {};

  constructor(
    private spaceService: SpaceService,
    private taskService: TaskService,
    private noteService: NoteService,
    private navigationService: NavigationService
  ) {}

  public handleSpaces(): Observable<Space[]> {
    return merge(
      this.searchParams$,
      this.spaceService.spaceChange$,
      this.taskService.taskChange$,
      this.noteService.noteChange$
    ).pipe(
      startWith({}),
      switchMap((searchParams) => {
        if (searchParams) {
          this.prevSearchParamsValue = searchParams;
        }
        return this.spaceService.getSpaces(
          searchParams || this.prevSearchParamsValue
        );
      })
    );
  }

  public goToSpaceEditPage(id: Space['id']): void {
    this.navigationService.goToSpaceEditPage(id);
  }

  public handleSearchParamsChange(params: SpaceSearchParams): void {
    this.searchParams$.next(params);
  }

  public removeSpace(id: Space['id']): Observable<Space> {
    return this.spaceService.removeSpace(id);
  }

  public completeTask(item: CompletedTaskListItem): Observable<Task> {
    return this.taskService.updateTask(item.id, {
      status: item.status,
    });
  }

  public editTask(id: Task['id']): void {
    this.navigationService.goToTaskEditPage(id);
  }

  public removeTask(id: Task['id']): Observable<Task> {
    return this.taskService.removeTask(id);
  }

  public editNote(id: Note['id']): void {
    this.navigationService.goToNoteEditPage(id);
  }

  public removeNote(id: Note['id']): Observable<Note> {
    return this.noteService.removeNote(id);
  }
}
