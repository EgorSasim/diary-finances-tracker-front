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

  public goToIncomeTypesPage(): void {
    this.navigationService.goToIncomeTypesPage();
  }

  public goToExpensesPage(): void {
    this.navigationService.goToExpansesPage();
  }

  public goToExpenseTypesPage(): void {
    this.navigationService.goToExpenseTypesPage();
  }

  public goToBalancePage(): void {
    this.navigationService.goToBalancePage();
  }

  public goToCalculationsPage(): void {
    this.navigationService.goToCalculationsPage();
  }
}
