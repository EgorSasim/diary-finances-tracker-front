import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FinalAmounCalculationsResultYearData } from '../compound-interest-results-table.typings';
import { ListColumnNames } from '../../../../common/list/list.typings';

@Component({
  selector: 'dft-compound-interest-results-table-item',
  templateUrl: './compound-interest-results-table-item.component.html',
  styleUrl: './compound-interest-results-table-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundInterestResultsTableItemComponent {
  @Input() public item: FinalAmounCalculationsResultYearData;
}
