import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ListColumnNames } from '../../common/list/list.typings';
import { IncomeType } from '../../../services/income-type/income-type.typings';
import { IncomeTypeListItem } from './income-type-list-item/income-type-list-item.typings';

@Component({
  selector: 'dft-income-type-list',
  templateUrl: './income-type-list.component.html',
  styleUrl: './income-type-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeTypeListComponent {
  @Input() public incomeTypeItems: IncomeTypeListItem[];
  @Output() public removeIncomeType: EventEmitter<number> = new EventEmitter();
  @Output() public editIncomeType: EventEmitter<number> = new EventEmitter();

  public readonly columnNames: ListColumnNames = ['app.title', 'app.settings'];
  public removeIncomeTypeEmit(id: IncomeType['id']): void {
    this.removeIncomeType.emit(id);
  }

  public editIncomeTypeEmit(id: IncomeType['id']): void {
    this.editIncomeType.emit(id);
  }
}
