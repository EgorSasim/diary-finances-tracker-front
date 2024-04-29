import { Component } from '@angular/core';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Component({
  selector: 'dft-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  constructor(private navigationService: NavigationService) {}

  public goToHomePage(): void {
    this.navigationService.goToHomePage();
  }

  public goToTasksPage(): void {
    this.navigationService.goToTasksPage();
  }

  public goToNotesPage(): void {
    this.navigationService.goToNotesPage();
  }

  public goToSpacesPage(): void {
    this.navigationService.goToSpacesPage();
  }

  public goToIncomesPage(): void {
    this.navigationService.goToIncomesPage();
  }

  public goToExpensesPage(): void {
    this.navigationService.goToExpansesPage();
  }
}
