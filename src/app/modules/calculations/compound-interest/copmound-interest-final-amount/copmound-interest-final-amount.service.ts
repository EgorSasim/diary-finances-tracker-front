import { DestroyRef, Injectable } from '@angular/core';
import {
  CompoundInterestFinalAmount,
  FinalAmounCalculationsResult,
} from './comound-interest-final-amount.typings';
import { getFinalAmountWithNoReinvestment } from './copmound-interest-final-amount.helpers';
import { Observable, forkJoin, map, startWith, switchMap } from 'rxjs';
import { CompoundInterestAnlysysChartItem } from '../compound-interest-charts/compound-interest-analysis-chart/compound-interest-analysis-chart.typings';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class CompoundInterestFinalAmountService {
  constructor(
    private translateService: TranslateService,
    private destroyRef: DestroyRef
  ) {}

  public calculateFinalAmount(
    finalAmountData: CompoundInterestFinalAmount
  ): FinalAmounCalculationsResult {
    return getFinalAmountWithNoReinvestment(finalAmountData);
  }

  public getAnalysisChartData(
    calculationsResult: FinalAmounCalculationsResult
  ): Observable<CompoundInterestAnlysysChartItem[]> {
    return this.translateService.onLangChange.pipe(
      startWith(true),
      switchMap(() =>
        forkJoin([
          this.translateService.get('compoundInterest.startSum'),
          this.translateService.get('copmoundInterest.replenishment'),
          this.translateService.get('app.income'),
        ])
      ),
      map((vals) => [
        {
          name: vals[0],
          value: calculationsResult.startSum,
        },
        {
          name: vals[1],
          value: calculationsResult.replenishments,
        },
        {
          name: vals[2],
          value: calculationsResult.income,
        },
      ]),
      takeUntilDestroyed(this.destroyRef)
    );
  }
}
