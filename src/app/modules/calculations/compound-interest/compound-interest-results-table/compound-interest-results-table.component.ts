import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FinalAmounCalculationsResultYearData } from './compound-interest-results-table.typings';
import { ListColumnNames } from '../../../common/list/list.typings';

@Component({
  selector: 'dft-compound-interest-results-table',
  templateUrl: './compound-interest-results-table.component.html',
  styleUrl: './compound-interest-results-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundInterestResultsTableComponent {
  @Input() public yearsData: FinalAmounCalculationsResultYearData[];
  public readonly columnNames: ListColumnNames = [
    'app.period',
    'compoundInterest.startSum',
    'copmoundInterest.percentageIncome',
    'copmoundInterest.replenishment',
    'copmoundInterest.resultSum',
  ];
}
