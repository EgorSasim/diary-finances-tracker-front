import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class BackNavigationService {
  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

  public back(): void {
    let route: ActivatedRoute = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }
    this.goBack();
  }

  public goBack(): void {
    this.location.back();
  }
}
