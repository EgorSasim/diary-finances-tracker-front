import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TASK_STATUS_TO_TRANSLATION } from '../../../services/task/task.constants';
import { FormControl } from '@angular/forms';
import { Task } from '../../../services/task/task.typings';

@Component({
  selector: 'dft-task-status-selector',
  templateUrl: './task-status-selector.component.html',
  styleUrl: './task-status-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskStatusSelectorComponent {
  @Input() public withNullValue: boolean = true;
  @Input() public control: FormControl<Task['status']>;
  public readonly statuses = Object.keys(TASK_STATUS_TO_TRANSLATION);
  public readonly statusNames = Object.values(TASK_STATUS_TO_TRANSLATION);
}
