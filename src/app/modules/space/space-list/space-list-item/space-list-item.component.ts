import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Space } from '../../../../services/space/space.typings';
import { Note } from '../../../../services/note/note.typings';
import { Task } from '../../../../services/task/task.typings';
import { CompletedTaskListItem } from '../../../task/task-list/task-list-item/task-list-item.typings';

@Component({
  selector: 'dft-space-list-item',
  templateUrl: './space-list-item.component.html',
  styleUrl: './space-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceListItemComponent {
  @Input() public space: Space;
  @Output() public completeTask: EventEmitter<Task['id']> = new EventEmitter();
  @Output() public editTask: EventEmitter<CompletedTaskListItem> =
    new EventEmitter();
  @Output() public removeTask: EventEmitter<Task['id']> = new EventEmitter();
  @Output() public editNote: EventEmitter<Note['id']> = new EventEmitter();
  @Output() public removeNote: EventEmitter<Note['id']> = new EventEmitter();

  public completeTaskEmit(id: Task['id']): void {
    this.completeTask.emit(id);
  }

  public editTaskEmit(item: CompletedTaskListItem): void {
    this.editTask.emit(item);
  }

  public removeTaskEmit(id: Task['id']): void {
    this.removeTask.emit(id);
  }

  public editNoteEmit(id: Note['id']): void {
    this.editNote.emit(id);
  }

  public removeNoteEmit(id: Note['id']): void {
    this.removeNote.emit(id);
  }
}
