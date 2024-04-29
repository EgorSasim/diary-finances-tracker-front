export const INCOMES_TYPES_PERCENTAGE_CHART_OPTIONS = {
  chartSize: [500, 500],
  showXAxis: true,
  showYAxis: true,
  gradient: false,
  showXAxisLabel: true,
  showYAxisLabel: true,
  showLegend: false,
  maxLabelLength: 25,
  legendPosition: 'below',
  colorScheme: 'aqua',
  explodeSlices: false,
  tooltipText: (obj: any) => {
    return obj?.['value'].toFixed(2) + '...';
  },
};

export const INCOME_AMOUNT_CHART_OPTIONS = {
  chartSize: [800, 400],
  showXAxis: true,
  showYAxis: true,
  gradient: false,
  showXAxisLabel: true,
  showYAxisLabel: true,
  colorScheme: 'fire',
};
