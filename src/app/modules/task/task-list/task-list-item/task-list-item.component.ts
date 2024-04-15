import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CompletedTaskListItem, TaskListItem } from './task-list-item.typings';
import { TASK_PRIORITY_TO_NAME } from '../../../../services/task/task.constants';
import { TaskStatus } from '../../../../services/task/task.typings';

@Component({
  selector: 'dft-task-item',
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListItemComponent {
  @Input() taskItem: TaskListItem;
  @Output() remove: EventEmitter<number> = new EventEmitter();
  @Output() edit: EventEmitter<number> = new EventEmitter();
  @Output() complete: EventEmitter<CompletedTaskListItem> = new EventEmitter();

  public readonly taskPriorityName = TASK_PRIORITY_TO_NAME;

  public removeTask(id: number): void {
    this.remove.emit(id);
  }

  public editTask(id: number): void {
    this.edit.emit(id);
  }

  public completeTask(id: number, status: TaskStatus) {
    this.complete.emit({ id, status });
  }
}
