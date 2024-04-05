import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CompletedTaskItem, TaskItem } from './task-item/task-item.typings';
import { ListColumnNames } from '../../common/list/list.typings';

@Component({
  selector: 'dft-task-list',
  templateUrl: './task-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  @Input() public taskItems: TaskItem[];
  @Output() public removeTask: EventEmitter<number> = new EventEmitter();
  @Output() public editTask: EventEmitter<number> = new EventEmitter();
  @Output() public completeTask: EventEmitter<CompletedTaskItem> =
    new EventEmitter();
  public readonly columnNames: ListColumnNames = [
    'app.title',
    'app.endDate',
    'app.priority',
    'app.settings',
  ];
  public removeTaskEmit(id: number): void {
    this.removeTask.emit(id);
  }

  public editTaskEmit(id: number): void {
    this.editTask.emit(id);
  }

  public completeTaskEmit(completedTaskItem: CompletedTaskItem): void {
    this.completeTask.emit(completedTaskItem);
  }
}
