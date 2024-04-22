import { Injectable } from '@angular/core';
import { TaskService } from '../../../../services/task/task.service';
import { Observable, map, startWith, switchMap } from 'rxjs';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar';
import {
  mapEventToTask,
  mapTasksToCalendarEvents,
} from './tasks-page-calendar.mappers';
import { CalendarAction } from './tasks-page-calendar.typings';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../../../../constants/routes-pathes';

@Injectable()
export class TasksPageCalendarService {
  constructor(private taskService: TaskService, private router: Router) {}

  public getEvents(): Observable<CalendarEvent[]> {
    return this.taskService.taskChange$.pipe(
      startWith(true),
      switchMap(() => this.taskService.getTasks()),
      map((tasks) => mapTasksToCalendarEvents(tasks, this.calendarActions))
    );
  }

  public handleCalendarEvent(
    action: CalendarAction,
    event: CalendarEvent
  ): void {
    console.log('event: ', event);
    console.log('action: ', action);
    const task = mapEventToTask(event as Required<CalendarEvent>);
    switch (action) {
      case 'Delete':
        console.log('event id: ', event.id);
        this.taskService
          .removeTask(event.id ? +event.id : 0)
          .subscribe(() => console.log('remove task...'));
        return;
      case 'DroppedOrResized':
        this.taskService
          .updateTask(task.id as number, task)
          .subscribe(() => console.log('upddated...'));
        return;
      case 'Clicked':
      case 'Edit':
        this.router.navigate([
          ROUTE_PATH.withHeader,
          ROUTE_PATH.taskEditPage,
          task.id,
        ]);
    }
  }

  private calendarActions: CalendarEventAction[] = [
    {
      label: `<span>&#9998;</span>`,
      cssClass: 'dft-tasks-page-calendar__label',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleCalendarEvent('Edit', event);
      },
    },
    {
      label: '<span  style="text-decoration: none">&#128465;</span>',
      cssClass: 'dft-tasks-page-calendar__label',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleCalendarEvent('Delete', event);
      },
    },
  ];
}
