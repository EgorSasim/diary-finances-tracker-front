import { TaskPriority } from '../services/task/task.typings';

export const TASK_PRIORITY_TO_NAME: Record<TaskPriority, string> = {
  Low: 'task.priority.low',
  Medium: 'task.priority.medium',
  High: 'task.priority.high',
};
