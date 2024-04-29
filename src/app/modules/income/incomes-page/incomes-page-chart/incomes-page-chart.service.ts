import { DestroyRef, Injectable } from '@angular/core';
import { IncomeService } from '../../../../services/income/income.service';
import {
  Observable,
  combineLatest,
  forkJoin,
  map,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { Income } from '../../../../services/income/income.typings';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  IncomeAmountChartData,
  IncomeTypeChartData,
} from './incomes-page-chart.typings';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class IncomesPageChartService {
  constructor(
    private incomeService: IncomeService,
    private destroyRef: DestroyRef,
    private translateService: TranslateService
  ) {}

  private handleIncomes(): Observable<Income[]> {
    return this.incomeService.incomesChange$.pipe(
      startWith(true),
      switchMap(() => this.incomeService.getIncomes()),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  public getIncomesAmountChartData(): Observable<IncomeAmountChartData[]> {
    return this.handleIncomes().pipe(
      map((incomes) =>
        incomes.reduce((amountData: IncomeAmountChartData[], income) => {
          if (!amountData.find((data) => data.name === income.date)) {
            amountData.push({
              name: income.date,
              value: income.amount,
            });
            return amountData;
          }
          const incomeItem = amountData.find(
            (data) => data.name === income.date
          ) as IncomeAmountChartData;
          incomeItem.value = +incomeItem.value + +income.amount;
          return amountData;
        }, [] as IncomeAmountChartData[])
      ),
      map((incomeData) =>
        incomeData.sort(
          (income1, income2) =>
            new Date(income1.name).getTime() - new Date(income2.name).getTime()
        )
      )
    );
  }

  public getIncomeTypesChartData(): Observable<IncomeTypeChartData[]> {
    return combineLatest([
      this.handleIncomes(),
      this.translateService.onLangChange.pipe(startWith(true)),
    ]).pipe(
      map(([incomesData]) =>
        incomesData.reduce((acc: IncomeTypeChartData[], item) => {
          const accItem = acc.find((accItem) => accItem.name === item.type);
          if (!accItem) {
            acc.push({
              name: item.type || 'No type',
              value: item.amount,
            });
          } else {
            accItem.value = +accItem.value + +item.amount;
          }
          return acc;
        }, [])
      )
    );
  }
}
