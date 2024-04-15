import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dft-tasks-page-list',
  templateUrl: './tasks-page-list.component.html',
  styleUrl: './tasks-page-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageListComponent {}
