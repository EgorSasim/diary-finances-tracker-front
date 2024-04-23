export type TaskChartColor =
  | 'Black'
  | 'White'
  | 'Red'
  | 'Blue'
  | 'Green'
  | 'Yellow'
  | 'Purple'
  | 'Brown'
  | 'Orange'
  | 'Pink';

export type TasksAmountToChartColor = { [key in TaskChartColor]: number };

export interface TaskCreationDateChartItem {
  name: Date;
  value: number;
}

export interface TaskChartItem {
  name: string;
  value: number;
}

export interface ColorInfo {
  name: string;
  shortDescription: string;
  longDescription: string;
}

export type ChartColorScheme =
  | 'Vivid'
  | 'Natural'
  | 'Cool'
  | 'Fire'
  | 'Solar'
  | 'Air'
  | 'Aqua'
  | 'Flame'
  | 'Ocean'
  | 'Forest'
  | 'Horizon'
  | 'Neons'
  | 'Picnic'
  | 'Night'
  | 'NightLights';
