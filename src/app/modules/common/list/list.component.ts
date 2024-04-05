import { Component, Input } from '@angular/core';
import { ListColumnNames } from './list.typings';

@Component({
  selector: 'dft-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() columnNames: ListColumnNames;
}
