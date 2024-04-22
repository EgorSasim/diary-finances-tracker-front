import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TasksPageChartService } from './tasks-page-chart.service';

@Component({
  selector: 'dft-tasks-page-chart',
  templateUrl: './tasks-page-chart.component.html',
  styleUrl: './tasks-page-chart.component.scss',
  providers: [TasksPageChartService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageChartComponent {
  private data = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
  ];
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() {
    Object.assign(this, { single: this.data });
  }

  onSelect(event: any) {
    console.log(event);
  }
}
