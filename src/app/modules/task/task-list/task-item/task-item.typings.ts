import { Task } from '../../../../services/task/task.typings';

export type TaskItem = Pick<
  Task,
  'id' | 'title' | 'endDate' | 'priority' | 'completed'
>;

export interface CompletedTaskItem {
  id: number;
  isCompleted: boolean;
}
