import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CompletedTaskItem, TaskItem } from './task-item.typings';

@Component({
  selector: 'dft-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent {
  @Input() taskItem: TaskItem;
  @Output() remove: EventEmitter<number> = new EventEmitter();
  @Output() edit: EventEmitter<number> = new EventEmitter();
  @Output() complete: EventEmitter<CompletedTaskItem> = new EventEmitter();

  public removeTask(id: number): void {
    this.remove.emit(id);
  }

  public editTask(id: number): void {
    this.edit.emit(id);
  }

  public completeTask(id: number, completed: boolean) {
    this.complete.emit({ id, isCompleted: completed });
  }
}
