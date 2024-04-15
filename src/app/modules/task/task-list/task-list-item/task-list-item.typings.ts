import { Task } from '../../../../services/task/task.typings';

export type TaskListItem = Pick<
  Task,
  'id' | 'title' | 'endDate' | 'priority' | 'status'
>;

export interface CompletedTaskListItem {
  id: TaskListItem['id'];
  status: TaskListItem['status'];
}
