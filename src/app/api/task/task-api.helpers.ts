import { Task } from '../../services/task/task.typings';

export function getTaskTrulyTypeValues(task: Task): Task {
  return {
    ...task,
    creationDate: new Date(task.creationDate),
    startDate: task.startDate ? new Date(task.startDate) : undefined,
    endDate: task.endDate ? new Date(task.endDate) : undefined,
  };
}
