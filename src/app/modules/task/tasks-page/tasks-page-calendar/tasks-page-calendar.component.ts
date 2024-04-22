import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  addDays,
  addHours,
  endOfMonth,
  isSameDay,
  isSameMonth,
  startOfDay,
  subDays,
} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { TasksPageCalendarService } from './tasks-page-calendar.service';
import { CalendarAction } from './tasks-page-calendar.typings';
import { Observable } from 'rxjs';

@Component({
  selector: 'dft-tasks-page-calendar',
  templateUrl: './tasks-page-calendar.component.html',
  styleUrl: './tasks-page-calendar.component.scss',
  providers: [TasksPageCalendarService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageCalendarComponent {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  public events$: Observable<CalendarEvent[]> =
    this.tasksPageCalendarService.getEvents();

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  activeDayIsOpen: boolean = true;

  constructor(private tasksPageCalendarService: TasksPageCalendarService) {
    this.events$.subscribe((events) => console.log('events: ', events));
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  public handleEvent(action: CalendarAction, event: CalendarEvent): void {
    this.tasksPageCalendarService.handleCalendarEvent(action, event);
  }

  public eventTimesChanged({ event }: CalendarEventTimesChangedEvent): void {
    this.handleEvent('DroppedOrResized', event);
  }

  public setView(view: CalendarView) {
    this.view = view;
  }

  public closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
