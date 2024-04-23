import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
} from '@angular/core';
import { TasksPageListService } from './tasks-page-list.service';
import { Observable } from 'rxjs';
import { Task, TaskSearchParams } from '../../../../services/task/task.typings';
import { CompletedTaskListItem } from '../../task-list/task-list-item/task-list-item.typings';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../../../../constants/routes-pathes';
import { NavigationService } from '../../../../services/navigation/navigation.service';

@Component({
  selector: 'dft-tasks-page-list',
  templateUrl: './tasks-page-list.component.html',
  styleUrl: './tasks-page-list.component.scss',
  providers: [TasksPageListService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageListComponent {
  public tasks$: Observable<Task[]> =
    this.tasksPageListService.handleTasksChanges();
  public isLoading$: Observable<boolean> = this.tasksPageListService.isLoading$;

  constructor(
    private tasksPageListService: TasksPageListService,
    private changeDetectorRef: ChangeDetectorRef,
    private destroyRef: DestroyRef,
    private navigationService: NavigationService
  ) {}

  public searchParamsChange(searchParams: TaskSearchParams) {
    this.tasksPageListService.setIsLoading(true);
    this.tasksPageListService.searchParamsChange(searchParams);
  }

  public completeTask(completedTaskItem: CompletedTaskListItem): void {
    this.tasksPageListService
      .completeTask(completedTaskItem)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        complete: () => {
          this.changeDetectorRef.markForCheck();
        },
      });
  }

  public goToTaskEditPage(id: number): void {
    this.navigationService.goToTaskEditPage(id);
  }

  public removeTask(id: number): void {
    this.tasksPageListService
      .removeTask(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        complete: () => {
          this.changeDetectorRef.markForCheck();
        },
      });
  }
}
