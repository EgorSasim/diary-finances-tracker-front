import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dft-task-create-modal',
  templateUrl: './task-create-modal.component.html',
  styleUrl: './task-create-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCreateModalComponent {
  constructor(private matDialogRef: MatDialogRef<TaskCreateModalComponent>) {}

  public onClose(data?: any): void {
    this.matDialogRef.close(data);
  }
}
