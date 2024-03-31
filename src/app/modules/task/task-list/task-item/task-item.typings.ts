import { Task } from '../../../../services/task/task.typings';

export type TaskItem = Pick<Task, 'id' | 'title' | 'endDate' | 'priority'>;
