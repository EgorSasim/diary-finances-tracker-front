import { TaskDtoStatus } from '../../api/task/task-api.typings';
import { ConvertToForm } from '../../typings/forms';

export interface Task {
  id: number;
  title: string;
  creationDate: Date;
  description?: string;
  priority?: TaskPriority;
  startDate?: Date;
  endDate?: Date;
  reminder?: Date;
  reccurance?: TaskReccurance;
  status: TaskStatus;
}

export type TaskStatus = 'ToDo' | 'InProgress' | 'Done';
export type TaskPriority = 'Low' | 'Medium' | 'High';

export interface TaskReccurance {
  interval: number;
  type: TaskReccuranceType;
  daysOfWeek?: string[];
  daysOfMonth?: number[];
}

type TaskReccuranceType = 'Daily' | 'Weekly' | 'Monthly';

export interface TaskSearchParams {
  id?: number;
  title?: string;
  creationDate?: Date;
  description?: string;
  priority?: TaskPriority;
  startDate?: Date;
  endDate?: Date;
  status?: TaskStatus;
}

export type TaskForm = ConvertToForm<Task>;
export type TaskCreateForm = Required<Omit<TaskForm, 'id'>>;
export type TaskEditForm = Required<TaskForm>;

export type TaskSortParamsOrder = 'ASC' | 'DESC';
export enum TaskSortParam {
  CreationDate = 'creationDate',
  StartDate = 'startDate',
  EndDate = 'endDate',
  Completed = 'completed',
}
