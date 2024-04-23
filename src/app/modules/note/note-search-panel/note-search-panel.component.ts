import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { NoteSearchParams } from '../../../services/note/note.typings';
import { NoteSearchPanelBuilder } from './note-search-panel.builder';
import { ConvertToForm } from '../../../typings/forms';
import { FormGroup } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'dft-note-search-panel',
  templateUrl: './note-search-panel.component.html',
  styleUrl: './note-search-panel.component.scss',
  providers: [NoteSearchPanelBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteSearchPanelComponent {
  @Output() public searchParamsChange: EventEmitter<NoteSearchParams> =
    new EventEmitter();

  public formGroup: FormGroup<ConvertToForm<NoteSearchParams>> =
    this.noteSearchPanelBuilder.createFormGroup();

  constructor(
    private noteSearchPanelBuilder: NoteSearchPanelBuilder,
    private destroyRef: DestroyRef
  ) {
    this.handleFormGroupChange();
  }

  public clearFormGroup(): void {
    this.formGroup.setValue({
      creationDate: null,
      title: null,
    });
    this.formGroup.markAsPristine();
  }

  private handleFormGroupChange(): void {
    this.formGroup.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((searhcParams) => {
        this.searchParamsChange.emit(searhcParams as NoteSearchParams);
      });
  }
}
