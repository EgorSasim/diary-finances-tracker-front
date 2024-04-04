import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dft-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrl: './edit-header.component.scss',
})
export class EditHeaderComponent {
  @Output() public back: EventEmitter<void> = new EventEmitter();
  @Output() public reset: EventEmitter<void> = new EventEmitter();
  @Output() public save: EventEmitter<void> = new EventEmitter();

  public goBackEmit(): void {
    this.back.emit();
  }

  public resetEmit(): void {
    this.reset.emit();
  }

  public saveEmit(): void {
    this.save.emit();
  }
}
