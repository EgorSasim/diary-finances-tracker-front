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

export const TASK_CHART_COLOR_TO_TRANSLATION: Record<TaskChartColor, string> = {
  Black: 'app.colorDescription.black',
  Blue: 'app.colorDescription.blue',
  Brown: 'app.colorDescription.brown',
  Green: 'app.colorDescription.green',
  Orange: 'app.colorDescription.orange',
  Pink: 'app.colorDescription.pink',
  Purple: 'app.colorDescription.purple',
  Red: 'app.colorDescription.red',
  White: 'app.colorDescription.white',
  Yellow: 'app.colorDescription.yellow',
};

export type TasksAmountToChartColor = { [key in TaskChartColor]: number };
