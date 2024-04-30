import { TranslateService } from '@ngx-translate/core';
import { INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION } from '../../../../api/income-type/income-type-api.constants';

export function getIncomesTypesPercentageChartOptions(
  translateService: TranslateService
) {
  return {
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
    labelFormatting: (
      label: keyof typeof INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION
    ) =>
      translateService.instant(
        INCOME_DEFAULT_TYPE_NAMES_TO_TRANSLATION[label] || label
      ),
  };
}

export const INCOME_AMOUNT_CHART_OPTIONS = {
  chartSize: [800, 400],
  showXAxis: true,
  showYAxis: true,
  gradient: false,
  showXAxisLabel: true,
  showYAxisLabel: true,
  colorScheme: 'fire',
};
