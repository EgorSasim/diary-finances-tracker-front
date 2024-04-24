import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Space } from '../../../services/space/space.typings';
import { SpaceSelectorService } from './space-selector.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'dft-space-selector',
  templateUrl: './space-selector.component.html',
  styleUrl: './space-selector.component.scss',
  providers: [SpaceSelectorService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceSelectorComponent {
  @Input() public control: FormControl<Space['id']>;

  public readonly spaces$: Observable<Space[]> =
    this.spaceSelectorService.handleSpaces();

  constructor(private spaceSelectorService: SpaceSelectorService) {}
}
