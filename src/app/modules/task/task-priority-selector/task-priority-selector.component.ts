import { Component, Input } from '@angular/core';
import { Task } from '../../../services/task/task.typings';
import { TASK_PRIORITY_TO_NAME } from '../../../services/task/task.constants';

@Component({
  selector: 'dft-task-priority-selector',
  templateUrl: './task-priority-selector.component.html',
  styleUrl: './task-priority-selector.component.scss',
})
export class TaskPrioritySelectorComponent {
  @Input() public control: Task['priority'];

  public readonly priorities = Object.keys(TASK_PRIORITY_TO_NAME);
  public readonly priorityNames = Object.values(TASK_PRIORITY_TO_NAME);
}
