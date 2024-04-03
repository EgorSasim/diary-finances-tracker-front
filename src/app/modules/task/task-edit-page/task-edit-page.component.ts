import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dft-task-edit-page',
  templateUrl: './task-edit-page.component.html',
  styleUrl: './task-edit-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskEditPageComponent {}
