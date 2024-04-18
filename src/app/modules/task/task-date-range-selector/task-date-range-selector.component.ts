import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormErrorMessageService } from '../../../services/form-error-message/form-error-message.service';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'dft-task-date-range-selector',
  templateUrl: './task-date-range-selector.component.html',
  styleUrl: './task-date-range-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDateRangeSelectorComponent {
  @Input() formGroup: FormGroup<{
    startDate: FormControl<Date>;
    endDate: FormControl<Date>;
  }>;

  constructor(private formErrorMessageService: FormErrorMessageService) {}

  public getErrorMessage(control: AbstractControl): string {
    return this.formErrorMessageService.getControlErrorMessage(control);
  }
}
