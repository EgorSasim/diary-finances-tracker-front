import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../../constants/routes-pathes';
import { Income } from '../income/income.typings';
import { Expense } from '../expense/expense.typings';
import { ExpenseType } from '../expense-type/expense-type.typings';
import { IncomeType } from '../income-type/income-type.typings';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  constructor(private router: Router) {}

  public goToAuthPage(): void {
    this.router.navigate([ROUTE_PATH.auth]);
  }

  public goToHomePage(): void {
    this.router.navigate([ROUTE_PATH.withHeader, ROUTE_PATH.home]);
  }

  public goToTasksPage(): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.withSideBar,
      ROUTE_PATH.tasksPage,
    ]);
  }

  public goToNotesPage(): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.withSideBar,
      ROUTE_PATH.notesPage,
    ]);
  }

  public goToSpacesPage(): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.withSideBar,
      ROUTE_PATH.spacesPage,
    ]);
  }

  public goToIncomesPage(): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.withSideBar,
      ROUTE_PATH.incomesPage,
    ]);
  }

  public goToExpansesPage(): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.withSideBar,
      ROUTE_PATH.expensesPage,
    ]);
  }

  public goToBalancePage(): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.withSideBar,
      ROUTE_PATH.balancePage,
    ]);
  }

  public goToCalculationsPage(): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.withSideBar,
      ROUTE_PATH.calculationsPage,
    ]);
  }

  public goToExpenseTypesPage(): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.withSideBar,
      ROUTE_PATH.expenseTypesPage,
    ]);
  }

  public goToIncomeTypesPage(): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.withSideBar,
      ROUTE_PATH.incomeTypesPage,
    ]);
  }

  public goToTaskEditPage(id: number): void {
    this.router.navigate([ROUTE_PATH.withHeader, ROUTE_PATH.taskEditPage, id]);
  }

  public goToNoteEditPage(id: number): void {
    this.router.navigate([ROUTE_PATH.withHeader, ROUTE_PATH.noteEditPage, id]);
  }

  public goToSpaceEditPage(id: number): void {
    this.router.navigate([ROUTE_PATH.withHeader, ROUTE_PATH.spaceEditPage, id]);
  }

  public goToUserEditPage(): void {
    this.router.navigate([ROUTE_PATH.withHeader, ROUTE_PATH.userEditPage]);
  }

  public goToIncomeEditPage(id: Income['id']): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.incomeEditPage,
      id,
    ]);
  }

  public goToExpenseEditPage(id: Expense['id']): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.expenseEditPage,
      id,
    ]);
  }

  public goToExpenseTypeEditPage(id: ExpenseType['id']): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.expenseTypeEditPage,
      id,
    ]);
  }

  public goToIncomeTypeEditPage(id: IncomeType['id']): void {
    this.router.navigate([
      ROUTE_PATH.withHeader,
      ROUTE_PATH.incomeTypeEditPage,
      id,
    ]);
  }
}
