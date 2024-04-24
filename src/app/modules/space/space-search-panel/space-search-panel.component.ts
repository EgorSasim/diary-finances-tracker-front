import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { SpaceSearchPanelBuilder } from './space-search-panel.builder';
import { FormGroup } from '@angular/forms';
import { ConvertToForm } from '../../../typings/forms';
import { SpaceSearchParams } from '../../../services/space/space.typings';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'dft-space-search-panel',
  templateUrl: './space-search-panel.component.html',
  styleUrl: './space-search-panel.component.scss',
  providers: [SpaceSearchPanelBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceSearchPanelComponent {
  @Output() public searchParamsChange: EventEmitter<SpaceSearchParams> =
    new EventEmitter();

  public formGroup: FormGroup<ConvertToForm<SpaceSearchParams>> =
    this.noteSearchPanelBuilder.createFormGroup();

  constructor(
    private noteSearchPanelBuilder: SpaceSearchPanelBuilder,
    private destroyRef: DestroyRef
  ) {
    this.handleFormGroupChange();
  }

  public clearFormGroup(): void {
    this.formGroup.setValue({
      name: null,
      noteIds: null,
      taskIds: null,
    });
    this.formGroup.markAsPristine();
  }

  private handleFormGroupChange(): void {
    this.formGroup.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((searhcParams) => {
        this.searchParamsChange.emit(searhcParams as SpaceSearchParams);
      });
  }
}
