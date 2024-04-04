import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
} from '@angular/core';
import { TaskEditPageService } from './task-edit-page.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  filter,
  finalize,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { Task } from '../../../services/task/task.typings';

@Component({
  selector: 'dft-task-edit-page',
  templateUrl: './task-edit-page.component.html',
  styleUrl: './task-edit-page.component.scss',
  providers: [TaskEditPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskEditPageComponent implements OnInit {
  public task$: ReplaySubject<Task> = new ReplaySubject(1);
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private taskEditPageService: TaskEditPageService,
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef
  ) {}

  public ngOnInit(): void {
    this.handleRouteIdChange();
  }

  private handleRouteIdChange(): void {
    this.isLoading.next(true);
    this.activatedRoute.params
      .pipe(
        tap((params) => console.log('params: ', params)),
        map((params) => params['id']),
        filter((id) => !!id),
        switchMap((id) => this.taskEditPageService.getTask(id)),
        finalize(() => this.isLoading.next(false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((task) => this.task$.next(task));
  }
}
