import { DestroyRef, Injectable } from '@angular/core';
import { NoteService } from '../../../services/note/note.service';
import { TaskService } from '../../../services/task/task.service';
import { SpaceService } from '../../../services/space/space.service';
import {
  Observable,
  ReplaySubject,
  map,
  merge,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { Task } from '../../../services/task/task.typings';
import { Note } from '../../../services/note/note.typings';
import { Space } from '../../../services/space/space.typings';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class DiaryAccordionService {
  public spaceNameChange$: ReplaySubject<Space['name']> = new ReplaySubject(1);
  public taskTitleChange$: ReplaySubject<Task['title']> = new ReplaySubject(1);
  public noteTitleChange$: ReplaySubject<Note['title']> = new ReplaySubject(1);

  constructor(
    private noteService: NoteService,
    private taskService: TaskService,
    private spaceService: SpaceService,
    private destroyRef: DestroyRef
  ) {}

  public handleTaskChange(): Observable<Task[]> {
    return merge(
      this.taskTitleChange$.pipe(startWith('')),
      this.taskService.taskChange$
    ).pipe(
      switchMap((title) =>
        this.taskService.getTasks({ title: title ? title : undefined })
      ),
      map((tasks) =>
        tasks.sort((firstTask) => {
          if (firstTask.status === 'Done') {
            return 1;
          } else {
            return -1;
          }
        })
      ),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  public handleNotesChange(): Observable<Note[]> {
    return merge(
      this.noteTitleChange$.pipe(startWith('')),
      this.noteService.noteChange$
    ).pipe(
      switchMap((title) =>
        this.noteService.getNotes({ title: title ? title : undefined })
      ),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  public handleSpacesChange(): Observable<Space[]> {
    return merge(
      this.spaceNameChange$.pipe(startWith('')),
      this.spaceService.spaceChange$
    ).pipe(
      switchMap((name) =>
        this.spaceService.getSpaces({ name: name ? name : undefined })
      ),
      takeUntilDestroyed(this.destroyRef)
    );
  }
}
