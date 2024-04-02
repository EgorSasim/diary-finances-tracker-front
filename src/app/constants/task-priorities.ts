import { TaskPriority } from '../services/task/task.typings';

export const TASK_PRIORITY_TO_NAME: Record<TaskPriority, string> = {
  High: 'task.priority.high',
  Low: 'task.priority.low',
  Medium: 'task.priority.medium',
};
