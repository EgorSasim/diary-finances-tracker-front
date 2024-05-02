import { MONTH_IN_YEAR } from '../../../../constants/date';
import { CompoundInterestGrowthChartItem } from '../compound-interest-charts/compound-interest-growth-chart/compound-interest-growth-chart.typings';
import {
  FinalAmounCalculationsResultPeriodData,
  FinalAmounCalculationsResultYearData,
} from '../compound-interest-results-table/compound-interest-results-table.typings';
import { CompoundInterestExtraInvestmentPeriod } from '../compound-interest-selectors/compound-interest-extra-investments-period-selector/compound-interest-extra-investments-period.typings';
import { CompoundInterestReinvestmentPeriod } from '../compound-interest-selectors/compound-interest-reinvestment-period-selector/compound-interest-reinvestment-period.typings';
import {
  CompoundInterestFinalAmount,
  FinalAmounCalculationsResult,
} from './comound-interest-final-amount.typings';

export function getFinalAmount(
  finalAmountData: CompoundInterestFinalAmount
): FinalAmounCalculationsResult {
  const monthsData = getFinalAmounMonthsData(finalAmountData);
  console.log('monthsData: ', monthsData);
  const yearsData: FinalAmounCalculationsResultYearData[] =
    getYearsWithMonthsData(monthsData);

  const replenishments = getAllExtraInvestmentsTotalSum(
    finalAmountData.extraInvestmentType,
    finalAmountData.extraInvestment,
    finalAmountData.ivestmentTermType === 'month'
      ? finalAmountData.investmentTerm
      : finalAmountData.investmentTerm * MONTH_IN_YEAR
  );
  const income: number = yearsData.reduce(
    (acc: number, year) => (acc += year.data.percentageIncome),
    0
  );
  const resultSum = yearsData.at(-1)?.data.resultSum || 0;
  return {
    startSum: finalAmountData.startUpCapital,
    income,
    replenishments,
    resultSum,
    yearsData,
  };
}

function getFinalAmounMonthsData(
  finalAmounData: CompoundInterestFinalAmount
): FinalAmounCalculationsResultPeriodData[] {
  const investmentPeriodsAmountInMonths =
    finalAmounData.ivestmentTermType === 'month'
      ? finalAmounData.investmentTerm
      : finalAmounData.investmentTerm * MONTH_IN_YEAR;
  const extraInvestitionsPeriodity: number =
    extraInvestitionsPeriodityNameToNumber[finalAmounData.extraInvestmentType];
  const reinvestmentPeriodity: number =
    reinvestmentPeriodityNameToNumber[finalAmounData.reinvestmentPeriod];

  const monthsData: FinalAmounCalculationsResultPeriodData[] = [];
  let resultMonthSum: number = finalAmounData.startUpCapital;
  let startMonthSum: number = finalAmounData.startUpCapital;
  const extraInvestment: number = finalAmounData.extraInvestment;
  const bid = finalAmounData.bid;

  for (let i = 0; i < investmentPeriodsAmountInMonths; ++i) {
    const percentageIncome = startMonthSum * (bid / MONTH_IN_YEAR / 100);
    resultMonthSum +=
      percentageIncome +
      ((i + 1) % extraInvestitionsPeriodity === 0
        ? extraInvestment
          ? extraInvestment
          : 0
        : 0);
    monthsData.push({
      investments:
        (i + 1) % extraInvestitionsPeriodity === 0 ? extraInvestment : 0,
      percentageIncome: percentageIncome,
      resultSum: resultMonthSum,
      serialNumber: i + 1,
      startSum: startMonthSum,
    });
    startMonthSum +=
      (i + 1) % extraInvestitionsPeriodity === 0
        ? extraInvestment
          ? extraInvestment
          : 0
        : 0;
    if (reinvestmentPeriodity) {
      startMonthSum =
        (i + 1) % reinvestmentPeriodity === 0 ? resultMonthSum : startMonthSum;
    }
  }

  return monthsData;
}

export function getAllExtraInvestmentsTotalSum(
  investmentPeriod: CompoundInterestExtraInvestmentPeriod,
  investmentAmount: number,
  totalPeriodInMonths: number
): number {
  const investmentPeriodicity =
    extraInvestitionsPeriodityNameToNumber[investmentPeriod];
  return (totalPeriodInMonths / investmentPeriodicity) * investmentAmount;
}

export function getCompoundInterestGrowthChartData(
  finalAmountCalculationsResult: FinalAmounCalculationsResult
): CompoundInterestGrowthChartItem[] {
  const percentageIncomeSeries = finalAmountCalculationsResult.yearsData.map(
    (year, index) => ({
      name: index + 1,
      value: finalAmountCalculationsResult.yearsData.reduce((acc, year, i) => {
        if (i <= index) {
          acc += year.data.percentageIncome;
        }
        return acc;
      }, 0),
    })
  );
  const startSum = finalAmountCalculationsResult.yearsData.map(
    (year, index) => ({
      name: index + 1,
      value: year.data.startSum,
    })
  );
  const balanceSeries = finalAmountCalculationsResult.yearsData.map(
    (year, index) => ({
      name: index + 1,
      value: year.data.resultSum,
    })
  );

  startSum.unshift({
    name: 0,
    value: finalAmountCalculationsResult.yearsData[0].data.startSum,
  });
  percentageIncomeSeries.unshift({
    name: 0,
    value: 0,
  });
  balanceSeries.unshift({
    name: 0,
    value: finalAmountCalculationsResult.yearsData[0].data.startSum,
  });
  return [
    {
      name: 'copmoundInterest.percentageIncome',
      series: percentageIncomeSeries,
    },
    {
      name: 'compoundInterest.startSum',
      series: startSum,
    },
    {
      name: 'app.balance',
      series: balanceSeries,
    },
  ];
}

function getYearsWithMonthsData(
  months: FinalAmounCalculationsResultPeriodData[]
): FinalAmounCalculationsResultYearData[] {
  console.log('income months: ', months);
  const years: FinalAmounCalculationsResultYearData[] = new Array(
    Math.ceil(months.length / MONTH_IN_YEAR)
  );
  for (let i = 0; i < years.length; ++i) {
    years[i] = {
      data: {} as FinalAmounCalculationsResultPeriodData,
      monthsData: [],
    };
  }

  for (let i = 0; i < months.length; ++i) {
    years[Math.floor(i / MONTH_IN_YEAR)].monthsData.push(months[i]);
  }

  for (let i = 0; i < years.length; ++i) {
    const year = years[i];
    let yearPercentageIncome = 0;
    let yearInvestments = 0;
    const monthData = year.monthsData;
    for (let i = 0; i < monthData.length; ++i) {
      yearPercentageIncome += monthData[i].percentageIncome;
      yearInvestments += monthData[i].investments;
    }
    year.data.investments = yearInvestments;
    year.data.percentageIncome = yearPercentageIncome;
    year.data.resultSum = year.monthsData.at(-1)?.resultSum || 0;
    year.data.serialNumber = i + 1;
    year.data.startSum = year.monthsData[0].startSum;
  }
  console.log('output months: ', months);

  return years;
}

const extraInvestitionsPeriodityNameToNumber: Record<
  CompoundInterestExtraInvestmentPeriod,
  number
> = {
  halfYear: 6,
  month: 1,
  quarter: 3,
  year: 12,
};

const reinvestmentPeriodityNameToNumber: Record<
  CompoundInterestReinvestmentPeriod,
  number
> = {
  noReinvestment: 0,
  month: 1,
  quarter: 3,
  halfYear: 6,
  year: 12,
};
