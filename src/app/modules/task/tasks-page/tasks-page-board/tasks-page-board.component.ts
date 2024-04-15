import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dft-tasks-page-board',
  templateUrl: './tasks-page-board.component.html',
  styleUrl: './tasks-page-board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageBoardComponent {}
