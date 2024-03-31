import { Component, Input } from '@angular/core';
import { TaskItem } from './task-item/task-item.typings';
import { TASKS } from '../task.constants';

@Component({
  selector: 'dft-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  @Input() public taskItems: TaskItem[] = TASKS;
}
