import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { FinalAmounCalculationsResultYearData } from '../compound-interest-results-table.typings';
import { ListColumnNames } from '../../../../common/list/list.typings';

@Component({
  selector: 'dft-compound-interest-results-table-item',
  templateUrl: './compound-interest-results-table-item.component.html',
  styleUrl: './compound-interest-results-table-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundInterestResultsTableItemComponent implements OnChanges {
  @Input() public item: FinalAmounCalculationsResultYearData;

  public readonly columnNames: ListColumnNames = [
    'app.month',
    'compoundInterest.startSum',
    'copmoundInterest.percentageIncome',
    'copmoundInterest.replenishment',
    'copmoundInterest.resultSum',
  ];

  public ngOnChanges(): void {
    if (this.item) {
      console.log('item: ', this.item);
    }
  }
}
