import { ChangeDetectorRef, Component, DestroyRef } from '@angular/core';
import { HomePageService } from './home-page.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskCreateModalComponent } from '../task/task-create-modal/task-create-modal.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Task } from '../../services/task/task.typings';
import {
  BehaviorSubject,
  Observable,
  filter,
  finalize,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { CompletedTaskItem } from '../task/task-list/task-item/task-item.typings';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../../constants/routes-pathes';
import { NoteCreateModalComponent } from '../note/note-create-modal/note-create-modal.component';
import { Note } from '../../services/note/note.typings';

@Component({
  selector: 'dft-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [HomePageService],
})
export class HomePageComponent {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public tasks$: Observable<Task[]>;

  constructor(
    private homePageService: HomePageService,
    private matDialog: MatDialog,
    private destroyRef: DestroyRef,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {
    this.updateTasks();
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

  public completeTask(completedTaskItem: CompletedTaskItem): void {
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

  private updateTasks(): void {
    this.isLoading$.next(true);
    this.tasks$ = this.homePageService.getAllTasks().pipe(
      take(1),
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

  private handleNoteCreation(note: Note): void {
    this.isLoading$.next(true);
    this.homePageService
      .createNote(note)
      .pipe(
        tap((note) => {
          console.log('create note.....', note);
          console.log('updated note list...');
        }),
        switchMap(() => {
          console.log('get all notes.....');
          return this.homePageService.getNotes();
        }),
        tap((notes) => console.log('notes; ', notes))
      )
      .subscribe(() => {
        this.isLoading$.next(false);
      });
  }
}
