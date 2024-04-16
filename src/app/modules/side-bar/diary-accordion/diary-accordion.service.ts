import { DestroyRef, Injectable } from '@angular/core';
import { NoteService } from '../../../services/note/note.service';
import { TaskService } from '../../../services/task/task.service';
import { SpaceService } from '../../../services/space/space.service';
import { Observable, map, startWith, switchMap } from 'rxjs';
import { Task } from '../../../services/task/task.typings';
import { Note } from '../../../services/note/note.typings';
import { Space } from '../../../services/space/space.typings';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class DiaryAccordionService {
  constructor(
    private noteService: NoteService,
    private taskService: TaskService,
    private spaceService: SpaceService,
    private destroyRef: DestroyRef
  ) {}

  public handleTaskChange(): Observable<Task[]> {
    return this.taskService.taskChange$.pipe(
      startWith(true),
      switchMap(() => this.taskService.getTasks()),
      map((tasks) =>
        tasks.sort(
          (firstTask, secondTask) => +firstTask.status - +secondTask.status
        )
      ),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  public handleNotesChange(): Observable<Note[]> {
    return this.noteService.noteChange$.pipe(
      startWith(true),
      switchMap(() => this.noteService.getNotes()),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  public handleSpacesChange(): Observable<Space[]> {
    return this.spaceService.spaceChange$.pipe(
      startWith(true),
      switchMap(() => this.spaceService.getSpaces()),
      takeUntilDestroyed(this.destroyRef)
    );
  }
}
