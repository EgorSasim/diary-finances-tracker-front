import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { TaskSearchParams } from '../../../services/task/task.typings';
import { FormGroup } from '@angular/forms';
import { ConvertToForm } from '../../../typings/forms';
import { TaskSearchPanelBuilder } from './task-search-panel.builder';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'dft-task-search-panel',
  templateUrl: './task-search-panel.component.html',
  styleUrl: './task-search-panel.component.scss',
  providers: [TaskSearchPanelBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskSearchPanelComponent {
  @Output() public searchParamsChange: EventEmitter<TaskSearchParams> =
    new EventEmitter();
  public formGroup: FormGroup<ConvertToForm<TaskSearchParams>> =
    this.taskSearchPanelBuilder.createFormGroup();

  constructor(
    private taskSearchPanelBuilder: TaskSearchPanelBuilder,
    private destroyRef: DestroyRef
  ) {
    this.handleFormGroupChange();
  }

  private handleFormGroupChange(): void {
    this.formGroup.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((searhcParams) => {
        this.searchParamsChange.emit(searhcParams as TaskSearchParams);
      });
  }
}
