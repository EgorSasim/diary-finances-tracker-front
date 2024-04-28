import { DestroyRef, Injectable } from '@angular/core';
import { IncomeService } from '../../../../services/income/income.service';
import { BehaviorSubject, Observable, merge, startWith, switchMap } from 'rxjs';
import {
  Income,
  IncomeSearchParams,
} from '../../../../services/income/income.typings';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class IncomesPageListService {
  public searchParams$: BehaviorSubject<IncomeSearchParams> =
    new BehaviorSubject({});
  public prevSearchParamsValue: IncomeSearchParams = {};

  constructor(
    private incomeService: IncomeService,
    private destroyRef: DestroyRef
  ) {}

  public handleIncomes(): Observable<Income[]> {
    return merge(this.searchParams$, this.incomeService.incomesChange$).pipe(
      switchMap((searchParams) => {
        if (searchParams) {
          this.prevSearchParamsValue = { ...searchParams };
        }
        return this.incomeService.getIncomes(
          searchParams || this.prevSearchParamsValue
        );
      }),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  public removeIncome(id: Income['id']): Observable<Income> {
    return this.incomeService.removeIncome(id);
  }

  public searchParamsChange(params: IncomeSearchParams): void {
    this.searchParams$.next(params);
  }
}
