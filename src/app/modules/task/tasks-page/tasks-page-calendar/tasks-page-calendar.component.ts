import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dft-tasks-page-calendar',
  templateUrl: './tasks-page-calendar.component.html',
  styleUrl: './tasks-page-calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageCalendarComponent {}
