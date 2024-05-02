import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CompoundInterestGrowthChartItem } from './compound-interest-growth-chart.typings';
import { COMPOUND_INTEREST_GROWTH_CHART_OPTIONS } from './compound-interest-growth-chart.constants';

@Component({
  selector: 'dft-compound-interest-growth-chart',
  templateUrl: './compound-interest-growth-chart.component.html',
  styleUrl: './compound-interest-growth-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundInterestGrowthChartComponent {
  @Input() items: CompoundInterestGrowthChartItem[];

  public readonly chartOptions: typeof COMPOUND_INTEREST_GROWTH_CHART_OPTIONS =
    COMPOUND_INTEREST_GROWTH_CHART_OPTIONS;
}
