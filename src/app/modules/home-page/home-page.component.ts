import { ChangeDetectorRef, Component, DestroyRef } from '@angular/core';
import { HomePageService } from './home-page.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskCreateModalComponent } from '../task/task-create-modal/task-create-modal.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Task, TaskSortParam } from '../../services/task/task.typings';
import {
  BehaviorSubject,
  Observable,
  filter,
  finalize,
  map,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { CompletedTaskListItem } from '../task/task-list/task-list-item/task-list-item.typings';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../../constants/routes-pathes';
import { NoteCreateModalComponent } from '../note/note-create-modal/note-create-modal.component';
import { Note } from '../../services/note/note.typings';
import { SpaceCreateModalComponent } from '../space/space-create-modal/space-create-modal.component';
import { Space } from '../../services/space/space.typings';

@Component({
  selector: 'dft-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [HomePageService],
})
export class HomePageComponent {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public tasks$: Observable<Task[]>;
  public notes$: Observable<Note[]>;

  constructor(
    private homePageService: HomePageService,
    private matDialog: MatDialog,
    private destroyRef: DestroyRef,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {
    this.updateTasks();
    this.updateNotes();
  }

  public showCreateTaskModal(): void {
    const dialogRef = this.matDialog.open(TaskCreateModalComponent);
    dialogRef
      .afterClosed()
      .pipe(
        filter((task) => !!task),
        tap((task) => this.handleTaskCreation(task)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  public showCreateNoteModal(): void {
    const dialogRef = this.matDialog.open(NoteCreateModalComponent);
    dialogRef
      .afterClosed()
      .pipe(
        filter((note) => !!note),
        tap((note) => this.handleNoteCreation(note)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  public showCreateSpaceModal(): void {
    const dialogRef = this.matDialog.open(SpaceCreateModalComponent);
    dialogRef
      .afterClosed()
      .pipe(
        filter((space) => !!space),
        tap((space) => this.handleSpaceCreation(space)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  public completeTask(completedTaskItem: CompletedTaskListItem): void {
    this.isLoading$.next(true);
    this.homePageService
      .completeTask(completedTaskItem)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        complete: () => {
          this.updateTasks();
          this.changeDetectorRef.markForCheck();
        },
      });
  }

  public goToTaskEditPage(id: number): void {
    this.router.navigate([ROUTE_PATH.withHeader, ROUTE_PATH.taskEditPage, id]);
  }

  public removeTask(id: number): void {
    this.isLoading$.next(true);
    this.homePageService
      .removeTask(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        complete: () => {
          this.updateTasks();
          this.changeDetectorRef.markForCheck();
        },
      });
  }

  public goToNoteEditPage(id: Note['id']): void {
    this.router.navigate([ROUTE_PATH.withHeader, ROUTE_PATH.noteEditPage, id]);
  }

  public removeNote(id: Note['id']): void {
    this.isLoading$.next(true);
    this.homePageService
      .removeNote(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        complete: () => {
          this.updateNotes();
          this.changeDetectorRef.markForCheck();
        },
      });
  }

  private updateTasks(): void {
    this.isLoading$.next(true);
    this.tasks$ = this.homePageService.getAllTasks().pipe(
      take(1),
      map((tasks) =>
        tasks.sort(
          (firstTask, secondTask) => +firstTask.status - +secondTask.status
        )
      ),
      finalize(() => this.isLoading$.next(false)),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  private handleTaskCreation(task: Task): void {
    this.isLoading$.next(true);
    this.homePageService
      .createTask(task)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        complete: () => {
          this.updateTasks();
          this.changeDetectorRef.markForCheck();
        },
      });
  }

  private updateNotes(): void {
    this.isLoading$.next(true);
    this.notes$ = this.homePageService.getNotes().pipe(
      take(1),
      finalize(() => this.isLoading$.next(false)),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  private handleNoteCreation(note: Note): void {
    this.isLoading$.next(true);
    this.homePageService.createNote(note).subscribe({
      complete: () => {
        this.updateNotes();
        this.changeDetectorRef.markForCheck();
      },
    });
  }

  private handleSpaceCreation(space: Space): void {
    this.isLoading$.next(true);
    this.homePageService
      .createSpace(space)
      .pipe(
        finalize(() => this.isLoading$.next(false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
