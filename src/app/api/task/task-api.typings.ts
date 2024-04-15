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
}

export type TaskDtoStatus = 'ToDo' | 'InProgress' | 'Done';
type TaskDtoPriority = 'Low' | 'Medium' | 'High';

export interface TaskDtoReccurance {
  interval: number;
  type: TaskDtoReccuranceType;
  daysOfWeek?: string[];
  daysOfMonth?: number[];
}

type TaskDtoReccuranceType = 'Daily' | 'Weekly' | 'Monthly';
