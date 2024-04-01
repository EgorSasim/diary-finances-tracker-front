import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'dft-create-entity-menu-button',
  templateUrl: './create-entity-menu-button.component.html',
  styleUrl: './create-entity-menu-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEntityMenuButtonComponent {
  @Output() public createTask: EventEmitter<void> = new EventEmitter();
  @Output() public createNote: EventEmitter<void> = new EventEmitter();
  @Output() public createSpace: EventEmitter<void> = new EventEmitter();

  public emitTaskCreate(): void {
    this.createTask.emit();
  }

  public emitNoteCreate(): void {
    this.createNote.emit();
  }

  public emitSpaceCreate(): void {
    this.createSpace.emit();
  }
}
