import { EventColor } from 'calendar-utils';
import {
  Task,
  TaskPriority,
  TaskStatus,
} from '../../../../services/task/task.typings';

const TASK_CALENDAR_COLORS: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

export const TASK_PRIORITY_TO_TASK_CALENDAR_COLOR: Record<
  TaskPriority,
  EventColor
> = {
  High: TASK_CALENDAR_COLORS['red'],
  Medium: TASK_CALENDAR_COLORS['blue'],
  Low: TASK_CALENDAR_COLORS['yellow'],
};
