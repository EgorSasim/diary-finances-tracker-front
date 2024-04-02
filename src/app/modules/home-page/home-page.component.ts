import { ChangeDetectorRef, Component, DestroyRef } from '@angular/core';
import { HomePageService } from './home-page.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskCreateModalComponent } from '../task/task-create-modal/task-create-modal.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Task } from '../../services/task/task.typings';
import { BehaviorSubject, Observable, take } from 'rxjs';

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
    this.setAllTasks();
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

  private setAllTasks(): void {
    this.tasks$ = this.homePageService
      .getAllTasks()
      .pipe(take(1), takeUntilDestroyed(this.destroyRef));
  }

  private handleTaskCreation(task: Task): void {
    console.log('task: ', task);
    this.isLoading$.next(true);
    this.homePageService
      .createTask(task)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.isLoading$.next(false);
        this.setAllTasks();
        this.changeDetectorRef.detectChanges();
      });
  }
}
