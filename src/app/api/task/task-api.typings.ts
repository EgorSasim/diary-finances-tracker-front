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
  completed: Boolean;
}

type TaskDtoPriority = 'Low' | 'Medium' | 'High';

export interface TaskDtoReccurance {
  interval: number;
  type: TaskDtoReccuranceType;
  daysOfWeek?: string[];
  daysOfMonth?: number[];
}

type TaskDtoReccuranceType = 'Daily' | 'Weekly' | 'Monthly';
