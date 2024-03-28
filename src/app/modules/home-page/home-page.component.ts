import { Component } from '@angular/core';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'dft-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [HomePageService],
})
export class HomePageComponent {
  constructor(private homePageService: HomePageService) {}
}
