import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dft-tracker-accordion',
  templateUrl: './tracker-accordion.component.html',
  styleUrl: './tracker-accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrackerAccordionComponent {}
