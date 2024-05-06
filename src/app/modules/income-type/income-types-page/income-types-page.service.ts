import { DestroyRef, Injectable } from '@angular/core';
import { Observable, startWith, switchMap } from 'rxjs';
import { IncomeType } from '../../../services/income-type/income-type.typings';
import { IncomeTypeService } from '../../../services/income-type/income-type.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Injectable()
export class IncomeTypesPageService {
  constructor(
    private incomeTypeService: IncomeTypeService,
    private destroyRef: DestroyRef,
    private navigationService: NavigationService
  ) {}

  public handleIncomeTypes(): Observable<IncomeType[]> {
    return this.incomeTypeService.incomeTypeChange$.pipe(
      startWith(true),
      switchMap(() => this.incomeTypeService.getIncomeTypes()),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  public removeIncomeType(id: IncomeType['id']): Observable<IncomeType> {
    return this.incomeTypeService
      .removeIncomeType(id)
      .pipe(takeUntilDestroyed(this.destroyRef));
  }

  public goToIncomeTypeEditPage(id: IncomeType['id']): void {
    this.navigationService.goToIncomeTypeEditPage(id);
  }
}
