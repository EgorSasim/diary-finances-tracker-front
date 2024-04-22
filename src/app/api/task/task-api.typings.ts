export interface TaskDto {
  id: number;
  title: string;
  creationDate: Date;
  description?: string;
  priority?: TaskDtoPriority;
  startDate?: Date;
  endDate?: Date;
  reminder?: Date;
  reccurance?: TaskDtoReccurance;
  status: TaskDtoStatus;
  color?: string;
}

export type TaskDtoStatus = 'NoStatus' | 'ToDo' | 'InProgress' | 'Done';
type TaskDtoPriority = 'Low' | 'Medium' | 'High';

export interface TaskDtoSearchParams {
  id?: number;
  title?: string;
  creationDate?: Date;
  description?: string;
  priority?: TaskDtoPriority;
  startDate?: Date;
  endDate?: Date;
  status?: TaskDtoStatus;
  color?: string;
}

export interface TaskDtoReccurance {
  interval: number;
  type: TaskDtoReccuranceType;
  daysOfWeek?: string[];
  daysOfMonth?: number[];
}

type TaskDtoReccuranceType = 'Daily' | 'Weekly' | 'Monthly';
