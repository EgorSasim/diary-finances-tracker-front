import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FinalAmounCalculationsResultYearData } from './compound-interest-results-table.typings';

@Component({
  selector: 'dft-compound-interest-results-table',
  templateUrl: './compound-interest-results-table.component.html',
  styleUrl: './compound-interest-results-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompoundInterestResultsTableComponent implements OnChanges {
  @Input() public yearsData: FinalAmounCalculationsResultYearData[];

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.yearsData) {
      console.log('years Data: ', this.yearsData);
    }
  }
}
