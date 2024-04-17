import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TasksPageListService } from './tasks-page-list.service';
import {
  Observable,
  ReplaySubject,
  combineLatest,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { Task, TaskSearchParams } from '../../../../services/task/task.typings';

@Component({
  selector: 'dft-tasks-page-list',
  templateUrl: './tasks-page-list.component.html',
  styleUrl: './tasks-page-list.component.scss',
  providers: [TasksPageListService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageListComponent implements OnInit {
  public searchParams$: ReplaySubject<TaskSearchParams> = new ReplaySubject(1);
  public taskChange$: Observable<void> = this.tasksPageListService.tasksChange$;
  public tasks$: Observable<Task[]> = this.handleChanges();

  constructor(private tasksPageListService: TasksPageListService) {}

  public ngOnInit(): void {
    console.log('tasks: ', this.tasks$);
    this.tasks$.subscribe((tasks) => console.log('tasks: ', tasks));
  }

  public searchParamsChange(searchParams: TaskSearchParams) {
    this.searchParams$.next(searchParams);
  }

  public handleChanges(): Observable<Task[]> {
    return combineLatest([
      this.searchParams$.pipe(
        startWith(),
        tap(() => console.log('search params changes inside observable'))
      ),
    ]).pipe(
      tap(() => console.log('outside pipe')),
      switchMap(([searchParams]) => {
        console.log('search params: ', searchParams);
        return this.tasksPageListService.getTasks(searchParams);
      }),
      tap((tasks) => console.log('combine latest -> tasks: ', tasks))
    );
  }
}
