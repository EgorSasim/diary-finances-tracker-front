import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dft-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss',
})
export class EditPageComponent {
  @Input() public width: string = '60%';
  @Output() public back: EventEmitter<void> = new EventEmitter();
  @Output() public reset: EventEmitter<void> = new EventEmitter();
  @Output() public save: EventEmitter<void> = new EventEmitter();

  public backEmit(): void {
    this.back.emit();
  }

  public resetEmit(): void {
    this.reset.emit();
  }

  public saveEmit(): void {
    this.save.emit();
  }
}
