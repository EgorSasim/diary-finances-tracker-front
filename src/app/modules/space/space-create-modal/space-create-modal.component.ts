import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpaceCreateModalBuilder } from './space-create-modal.builder';
import { AbstractControl, FormGroup } from '@angular/forms';
import { SpaceCreateForm } from '../../../services/space/space.typings';
import { MatDialogRef } from '@angular/material/dialog';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { NoteService } from '../../../services/note/note.service';
import { TaskService } from '../../../services/task/task.service';

@Component({
  selector: 'dft-space-create-modal',
  templateUrl: './space-create-modal.component.html',
  styleUrl: './space-create-modal.component.scss',
  providers: [SpaceCreateModalBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceCreateModalComponent {
  public formGroup: FormGroup<SpaceCreateForm> =
    this.spaceCreateModalBuilder.createFormGroup();

  public tasks$ = this.taskService.getTasks();
  public notes$ = this.noteService.getNotes();

  constructor(
    private spaceCreateModalBuilder: SpaceCreateModalBuilder,
    private matDialogRef: MatDialogRef<SpaceCreateModalComponent>,
    private formErrorMessageService: FormErrorMessageService,
    private noteService: NoteService,
    private taskService: TaskService
  ) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }

  public create(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.matDialogRef.close(this.formGroup.value);
  }

  public close(): void {
    this.matDialogRef.close();
  }
}
