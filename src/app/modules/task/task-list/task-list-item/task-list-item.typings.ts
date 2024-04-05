import { Task } from '../../../../services/task/task.typings';

export type TaskListItem = Pick<
  Task,
  'id' | 'title' | 'endDate' | 'priority' | 'completed'
>;

export interface CompletedTaskListItem {
  id: number;
  isCompleted: boolean;
}
