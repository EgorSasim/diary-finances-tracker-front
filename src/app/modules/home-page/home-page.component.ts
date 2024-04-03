import { ChangeDetectorRef, Component, DestroyRef } from '@angular/core';
import { HomePageService } from './home-page.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskCreateModalComponent } from '../task/task-create-modal/task-create-modal.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Task } from '../../services/task/task.typings';
import { BehaviorSubject, Observable, finalize, switchMap, take } from 'rxjs';
import { CompletedTaskItem } from '../task/task-list/task-item/task-item.typings';

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
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.updateTasks();
  }

  public showCreateTaskModal(): void {
    const dialogRef = this.matDialog.open(TaskCreateModalComponent);
    dialogRef
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((task: Task) => {
        if (task) {
          this.handleTaskCreation(task);
        }
      });
  }

  public completeTask(completedTaskItem: CompletedTaskItem): void {
    this.isLoading$.next(true);
    this.homePageService
      .completeTask(completedTaskItem)
      .pipe(
        finalize(() => this.isLoading$.next(false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.updateTasks();
        this.changeDetectorRef.markForCheck();
      });
  }

  public goToTaskEditPage(id: number): void {
    console.log('editTask', id);
    this.isLoading$.next(true);
  }

  public removeTask(id: number): void {
    this.isLoading$.next(true);
    this.homePageService
      .removeTask(id)
      .pipe(
        finalize(() => this.isLoading$.next(false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.updateTasks();
        this.changeDetectorRef.markForCheck();
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
      .pipe(
        finalize(() => this.isLoading$.next(false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.updateTasks();
        this.changeDetectorRef.detectChanges();
      });
  }
}
