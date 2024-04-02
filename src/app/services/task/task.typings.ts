import { ConvertToForm } from '../../typings/forms';

export interface Task {
  id: number;
  title: string;
  readonly creationDate: Date;
  description?: string;
  priority?: TaskPriority;
  startDate?: Date;
  endDate?: Date;
  reminder?: Date;
  reccurance?: TaskReccurance;
}

export type TaskPriority = 'Low' | 'Medium' | 'High';

export interface TaskReccurance {
  interval: number;
  type: TaskReccuranceType;
  daysOfWeek?: string[];
  daysOfMonth?: number[];
}

type TaskReccuranceType = 'Daily' | 'Weekly' | 'Monthly';

export type TaskForm = ConvertToForm<Task>;
export type TaskCreateForm = Required<Omit<TaskForm, 'id'>>;
export type TaskEditForm = Required<TaskForm>;
