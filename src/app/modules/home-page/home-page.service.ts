import { Injectable } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import {
  Observable,
  combineLatest,
  filter,
  forkJoin,
  map,
  merge,
  startWith,
  switchMap,
} from 'rxjs';
import { User } from '../../services/user/user.typings';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../services/task/task.typings';
import { CompletedTaskListItem } from '../task/task-list/task-list-item/task-list-item.typings';
import { Note } from '../../services/note/note.typings';
import { NoteService } from '../../services/note/note.service';
import { Space } from '../../services/space/space.typings';
import { SpaceService } from '../../services/space/space.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskCreateModalComponent } from '../task/task-create-modal/task-create-modal.component';
import { NoteCreateModalComponent } from '../note/note-create-modal/note-create-modal.component';

@Injectable()
export class HomePageService {
  constructor(
    private userService: UserService,
    private noteService: NoteService,
    private taskService: TaskService,
    private matDialog: MatDialog
  ) {}

  public getUserInfo(): Observable<User> {
    return this.userService.getUserInfo();
  }
  public handleTasks(): Observable<Task[]> {
    return this.taskService.taskChange$.pipe(
      startWith(true),
      switchMap(() =>
        combineLatest([
          this.taskService
            .getTasks({ status: 'InProgress' })
            .pipe(startWith([])),
          this.taskService.getTasks({ status: 'ToDo' }).pipe(startWith([])),
        ]).pipe(
          map(([inProgress, toDo]) => {
            const toDoTasks = toDo as Task[];
            const inProgressTasks = inProgress as Task[];
            return inProgressTasks.concat(toDoTasks);
          }),
          map((tasks) => tasks.filter(this.filterTaskByDate))
        )
      )
    );
  }

  public removeTask(id: number): Observable<Task> {
    return this.taskService.removeTask(id);
  }

  public completeTask(
    completedTaskItem: CompletedTaskListItem
  ): Observable<Task> {
    return this.taskService.updateTask(completedTaskItem.id, {
      status: completedTaskItem.status,
    });
  }

  public showTaskCreateModal(): Observable<Task> {
    const dialogRef = this.matDialog.open(TaskCreateModalComponent);
    return dialogRef.afterClosed().pipe(
      filter((task) => !!task),
      switchMap((task: Task) => this.taskService.createTask(task))
    );
  }

  public handleNotes(): Observable<Note[]> {
    return this.noteService.noteChange$.pipe(
      startWith(true),
      switchMap(() => this.noteService.getNotes())
    );
  }

  public removeNote(id: Note['id']): Observable<Note> {
    return this.noteService.removeNote(id);
  }

  public showNoteCreateModal(): Observable<Note> {
    const dialogRef = this.matDialog.open(NoteCreateModalComponent);
    return dialogRef.afterClosed().pipe(
      filter((note) => !!note),
      switchMap((note: Note) => this.noteService.createNote(note))
    );
  }

  private filterTaskByDate(task: Task): boolean {
    const currDate = new Date(Date.now());
    if (task.startDate && task.endDate) {
      return task.startDate <= currDate && task.endDate >= currDate;
    }
    if (!task.startDate && !task.endDate) {
      return false;
    }
    if (task.startDate) {
      return task.startDate <= currDate;
    }
    if (task.endDate) {
      return task.endDate >= currDate;
    }
    return false;
  }
}
