import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { NoteCreateForm } from '../../../services/note/note.typings';
import { NoteCreateModalBuilder } from './note-create-modal.builder';
import { MatDialogRef } from '@angular/material/dialog';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';

@Component({
  selector: 'dft-note-create-modal',
  templateUrl: './note-create-modal.component.html',
  styleUrl: './note-create-modal.component.scss',
  providers: [NoteCreateModalBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteCreateModalComponent {
  public readonly textAreaHeight: string = '20rem';
  public formGroup: FormGroup<NoteCreateForm> =
    this.noteCreateModalBuilder.createFormGroup();

  constructor(
    private matDialogRef: MatDialogRef<NoteCreateModalComponent>,
    private noteCreateModalBuilder: NoteCreateModalBuilder,
    private formErrorMessageService: FormErrorMessageService
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
