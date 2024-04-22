import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from '../../../services/task/task.typings';

@Component({
  selector: 'dft-task-color-picker',
  templateUrl: './task-color-picker.component.html',
  styleUrl: './task-color-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskColorPickerComponent {
  @Input() control: FormControl<Task['color']>;
}
