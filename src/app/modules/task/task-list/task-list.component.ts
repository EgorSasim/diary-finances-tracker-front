import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CompletedTaskItem, TaskItem } from './task-item/task-item.typings';
import { TASKS } from '../task.constants';

@Component({
  selector: 'dft-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  @Input() public taskItems: TaskItem[] = TASKS;
  @Output() public removeTask: EventEmitter<number> = new EventEmitter();
  @Output() public editTask: EventEmitter<number> = new EventEmitter();
  @Output() public completeTask: EventEmitter<CompletedTaskItem> =
    new EventEmitter();

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
