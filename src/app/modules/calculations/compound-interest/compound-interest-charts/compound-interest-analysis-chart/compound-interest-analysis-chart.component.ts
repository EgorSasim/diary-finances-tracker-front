import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CompoundInterestAnlysysChartItem } from './compound-interest-analysis-chart.typings';
import { getAnalysisChartOptions } from './compound-interest-analysis-chart.helpers';

@Component({
  selector: 'dft-compound-interest-analysis-chart',
  templateUrl: './compound-interest-analysis-chart.component.html',
  styleUrl: './compound-interest-analysis-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundInterestAnalysisChartComponent {
  @Input() public analysysChartData: CompoundInterestAnlysysChartItem[];

  public chartOptions = getAnalysisChartOptions();

  constructor() {}
}
