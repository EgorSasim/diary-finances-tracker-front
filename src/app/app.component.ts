import { Component } from '@angular/core';
import { SharedModule } from './shared.module';

@Component({
  selector: 'dft-root',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
