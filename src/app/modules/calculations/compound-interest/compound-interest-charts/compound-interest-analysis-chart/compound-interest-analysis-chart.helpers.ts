import { TranslateService } from '@ngx-translate/core';
import { ANALYSIS_CHART_OPTIONS } from './compound-interest-analysis-chart.constants';

export function getAnalysisChartOptions() {
  return {
    ...ANALYSIS_CHART_OPTIONS,
  };
}
