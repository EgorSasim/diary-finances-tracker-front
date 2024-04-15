import { TaskPriority, TaskStatus } from './task.typings';

export const TASK_TITLE_MAX_LENGTH = 128;
export const TASK_DESCRIPTION_MAX_LENGTH = 2048;

export const TASK_PRIORITY_TO_NAME: Record<TaskPriority, string> = {
  Low: 'task.priority.low',
  Medium: 'task.priority.medium',
  High: 'task.priority.high',
};

export const TASK_STATUS_TO_TRANSLATION: Record<TaskStatus, string> = {
  ToDo: 'task.status.toDo',
  InProgress: 'task.status.inProgress',
  Done: 'task.status.done',
};
