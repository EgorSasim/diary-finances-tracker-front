import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CreateFormVisibleParts } from './create-form.typings';

@Component({
  selector: 'dft-create-form',
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateFormComponent<T> {
  @Input() width: string = '30rem';
  @Input() height: string = '30rem';
  @Input() visibleParts: CreateFormVisibleParts = {
    header: false,
    main: true,
    footer: true,
  };
  @Output() close: EventEmitter<void> = new EventEmitter();
  @Output() create: EventEmitter<void> = new EventEmitter();

  public closeEmit(): void {
    this.close.emit();
  }

  public createEmit(): void {
    this.create.emit();
  }
}
