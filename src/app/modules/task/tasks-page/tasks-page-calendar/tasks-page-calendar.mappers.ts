import { CalendarEvent, CalendarEventAction } from 'angular-calendar';
import { Task } from '../../../../services/task/task.typings';
import { endOfDay, startOfDay } from 'date-fns';
import { TASK_PRIORITY_TO_TASK_CALENDAR_COLOR } from './tasks-page-calendar.constants';

export function mapTasksToCalendarEvents(
  tasks: Task[],
  actions: CalendarEventAction[]
): CalendarEvent[] {
  return tasks
    .filter(filterTaskWithoutDate)
    .map((task) => mapTaskToCalendarEvent(task, actions));
}

function filterTaskWithoutDate(task: Task): boolean {
  return !!(task?.startDate || task?.endDate);
}

function mapTaskToCalendarEvent(
  task: Task,
  actions: CalendarEventAction[]
): CalendarEvent {
  return {
    id: task.id,
    start: task.startDate
      ? startOfDay(task.startDate)
      : task.endDate
      ? startOfDay(task.endDate)
      : new Date(),
    end: task.endDate
      ? startOfDay(task.endDate)
      : task.startDate
      ? startOfDay(task.startDate)
      : new Date(),
    title: task.title,
    actions,
    allDay: true,
    draggable: true,
    resizable: { beforeStart: true, afterEnd: true },
    color: task.priority
      ? TASK_PRIORITY_TO_TASK_CALENDAR_COLOR[task.priority]
      : undefined,
  };
}

export function mapEventToTask(event: Required<CalendarEvent>): Partial<Task> {
  return {
    id: +event.id,
    startDate: event.start,
    endDate: event.end,
  };
}
