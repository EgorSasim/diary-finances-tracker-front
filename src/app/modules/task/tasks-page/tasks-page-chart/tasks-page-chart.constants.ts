import { TASK_STATUS_TO_TRANSLATION } from '../../../../services/task/task.constants';
import { ChartColorScheme, TaskChartColor } from './tasks-page-chart-typings';
import { getRandChartColorTheme } from './tasks-page-chart.helpers';

export const TASK_CHART_COLOR_TO_SHORT_DESCRIPTION_TRANSLATION: Record<
  TaskChartColor,
  string
> = {
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

export const TASK_CHART_COLOR_TO_LONG_DESCRIPTION_TRANSLATION: Record<
  TaskChartColor,
  string
> = {
  Black: 'app.colorLongDescription.black',
  Blue: 'app.colorLongDescription.blue',
  Brown: 'app.colorLongDescription.brown',
  Green: 'app.colorLongDescription.green',
  Orange: 'app.colorLongDescription.orange',
  Pink: 'app.colorLongDescription.pink',
  Purple: 'app.colorLongDescription.purple',
  Red: 'app.colorLongDescription.red',
  White: 'app.colorLongDescription.white',
  Yellow: 'app.colorLongDescription.yellow',
};

export const TASK_CHART_COLOR_TRANSLATION: Record<TaskChartColor, string> = {
  Black: 'app.color.black',
  Blue: 'app.color.blue',
  Brown: 'app.color.brown',
  Green: 'app.color.green',
  Orange: 'app.color.orange',
  Pink: 'app.color.pink',
  Purple: 'app.color.purple',
  Red: 'app.color.red',
  White: 'app.color.white',
  Yellow: 'app.color.yellow',
};

export const CHART_COLOR_SCHEME_NAME: { [key in ChartColorScheme]: string } = {
  Air: 'air',
  Aqua: 'aqua',
  Cool: 'cool',
  Fire: 'fire',
  Flame: 'flame',
  Forest: 'forest',
  Horizon: 'horizon',
  Natural: 'natural',
  Neons: 'neons',
  Night: 'night',
  NightLights: 'nightLights',
  Ocean: 'ocean',
  Picnic: 'picnic',
  Solar: 'solar',
  Vivid: 'vivid',
};

export const TASK_CREATION_CHART_OPTIONS = {
  chartSize: [800, 400],
  showXAxis: true,
  showYAxis: true,
  gradient: false,
  showXAxisLabel: true,
  showYAxisLabel: true,
  colorScheme: getRandChartColorTheme(),
};

export const TASK_STATUSES_PERCENTAGE_CHART_OPTIONS = {
  chartSize: [500, 500],
  showXAxis: true,
  showYAxis: true,
  gradient: false,
  showXAxisLabel: true,
  showYAxisLabel: true,
  showLegend: false,
  maxLabelLength: 15,
  legendPosition: 'below',
  colorScheme: getRandChartColorTheme(),
  explodeSlices: false,
  tooltipText: (obj: any) => {
    return obj?.['value'].toFixed(2) + '%';
  },
};

export const TASK_AMOUNT_TO_EACH_COLOR_CHART_OPTIONS = {
  chartSize: [800, 400],
  showXAxis: true,
  showYAxis: true,
  gradient: false,
  showXAxisLabel: true,
  showYAxisLabel: true,
  colorScheme: {
    domain: [
      '#000000',
      '#2F7EEE',
      '#C04000',
      '#43A047',
      '#F7931A',
      '#E0BBEB',
      '#9D38BD',
      '#C0392B',
      '#CCCCCC',
      '#F9E79F',
    ],
  },
};
