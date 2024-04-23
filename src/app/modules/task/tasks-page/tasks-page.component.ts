import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dft-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageComponent {}
