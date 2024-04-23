import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dft-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrl: './notes-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesPageComponent {}
