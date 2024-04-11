import { Task, TaskSortParam, TaskSortParamsOrder } from './task.typings';

// export function getSortedTasks(
//   tasks: Task[],
//   sortParam: TaskSortParam,
//   order: TaskSortParamsOrder
// ): Task[] {
//   return tasks
//     .slice()
//     .sort((firstTask, secondTask) =>
//       sortTasks(firstTask, secondTask, sortParam, order)
//     );
// }

// export function sortTasks(
//   firstTask: Task,
//   secondTask: Task,
//   sortParam: TaskSortParam,
//   order: TaskSortParamsOrder
// ): number {
//   const firstTaskParam: Boolean | Date = firstTask[sortParam] as Boolean | Date;
//   const secondTaskParam: Boolean | Date = secondTask[sortParam] as
//     | Boolean
//     | Date;
//   console.log('first task Val: ', firstTaskParam);
//   const res =
//     (firstTask?.[sortParam] ?? true) > (secondTask?.[sortParam] ?? true);
//   return order === 'ASC' ? +res : +!res;
// }
