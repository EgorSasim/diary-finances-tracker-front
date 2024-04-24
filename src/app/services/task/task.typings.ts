import { FormControl } from '@angular/forms';
import { TaskDtoStatus } from '../../api/task/task-api.typings';
import { ConvertToForm } from '../../typings/forms';
import { Space } from '../space/space.typings';

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
  color?: string;
}

export interface CreateTask {
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
  color?: string;
  spaces?: Space['id'][];
}

export type TaskStatus = 'NoStatus' | 'ToDo' | 'InProgress' | 'Done';
export type TaskPriority = 'Low' | 'Medium' | 'High';

export interface TaskReccurance {
  interval: number;
  type: TaskReccuranceType;
  daysOfWeek?: string[];
  daysOfMonth?: number[];
}

type TaskReccuranceType = 'Daily' | 'Weekly' | 'Monthly';

export interface TaskSearchParams {
  title?: string;
  creationDate?: Date;
  description?: string;
  priority?: TaskPriority;
  startDate?: Date;
  endDate?: Date;
  status?: TaskStatus;
  color?: string;
}

export interface TaskWithSpaces extends Task {
  spaces?: TaskSpace[];
}

export interface TaskSpace {
  id: Space['id'];
  name: Space['name'];
}

export type TaskForm = ConvertToForm<Task>;

export type TaskCreateForm = {
  title?: FormControl<string | null>;
  creationDate: FormControl<Date | null>;
  description: FormControl<string | null>;
  priority: FormControl<TaskPriority | null>;
  startDate: FormControl<Date | null>;
  endDate: FormControl<Date | null>;
  reminder?: FormControl<Date | null>;
  reccurance?: FormControl<TaskReccurance | null>;
  status: FormControl<TaskStatus | null>;
  color: FormControl<string | null>;
  spaces: FormControl<number[] | null>;
};

export type TaskEditForm = {
  id: FormControl<number | null>;
  title?: FormControl<string | null>;
  creationDate: FormControl<Date | null>;
  description: FormControl<string | null | undefined>;
  priority: FormControl<TaskPriority | null | undefined>;
  startDate: FormControl<Date | null | undefined>;
  endDate: FormControl<Date | null | undefined>;
  reminder?: FormControl<Date | null | undefined>;
  reccurance?: FormControl<TaskReccurance | null | undefined>;
  status: FormControl<TaskStatus | null>;
  color: FormControl<string | null | undefined>;
  spaces: FormControl<number[] | null | undefined>;
};

export type TaskSortParamsOrder = 'ASC' | 'DESC';
export enum TaskSortParam {
  CreationDate = 'creationDate',
  StartDate = 'startDate',
  EndDate = 'endDate',
  Completed = 'completed',
}
