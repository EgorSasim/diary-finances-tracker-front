import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TaskItem } from './task-item.typings';

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

  public removeTask(id: number): void {
    this.remove.emit(id);
  }

  public editTask(id: number): void {
    this.edit.emit(id);
  }
}
