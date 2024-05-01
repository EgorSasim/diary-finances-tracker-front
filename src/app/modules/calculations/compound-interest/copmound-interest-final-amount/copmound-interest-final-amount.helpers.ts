import { MONTH_IN_YEAR } from '../../../../constants/date';
import { CompoundInterestExtraInvestmentPeriod } from '../compound-interest-selectors/compound-interest-extra-investments-period-selector/compound-interest-extra-investments-period.typings';
import {
  CompoundInterestFinalAmount,
  FinalAmounCalculationsResult,
  FinalAmounCalculationsResultPeriodData,
  FinalAmounCalculationsResultYearData,
} from './comound-interest-final-amount.typings';

export function getFinalAmountWithNoReinvestment(
  finalAmountData: CompoundInterestFinalAmount
): FinalAmounCalculationsResult {
  const investmentPeriodsAmount =
    finalAmountData.ivestmentTermType === 'month'
      ? finalAmountData.investmentTerm / MONTH_IN_YEAR
      : finalAmountData.investmentTerm;

  const monthsData =
    getFinalAmountWithNoReinvestmentsMonthsData(finalAmountData);

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
  const resultSum = (yearsData.at(-1)?.data.resultSum || 0) - replenishments;
  return {
    startSum: finalAmountData.startUpCapital,
    income,
    replenishments,
    resultSum,
    yearsData,
  };
}

export function getFinalAmountWithNoReinvestmentsMonthsData(
  finalAmounData: CompoundInterestFinalAmount
): FinalAmounCalculationsResultPeriodData[] {
  const investmentPeriodsAmountInMonths =
    finalAmounData.ivestmentTermType === 'month'
      ? finalAmounData.investmentTerm
      : finalAmounData.investmentTerm * MONTH_IN_YEAR;
  const extraInvestitionsPeriodity: number =
    extraInvestitionsPeriodityNameToNumber[finalAmounData.extraInvestmentType];

  const monthsData: FinalAmounCalculationsResultPeriodData[] = [];
  let resultMonthSum: number = finalAmounData.startUpCapital;
  let startMonthSum: number = finalAmounData.startUpCapital;
  const extraInvestition: number = finalAmounData.extraInvestment;

  for (let i = 0; i < investmentPeriodsAmountInMonths; ++i) {
    const percentageIncome =
      startMonthSum * (finalAmounData.bid / MONTH_IN_YEAR / 100);
    resultMonthSum +=
      percentageIncome +
      ((i + 1) % extraInvestitionsPeriodity === 0
        ? extraInvestition
          ? extraInvestition
          : 0
        : 0);
    monthsData.push({
      investments:
        (i + 1) % extraInvestitionsPeriodity === 0 ? extraInvestition : 0,
      percentageIncome: percentageIncome,
      resultSum: resultMonthSum,
      serialNumber: i + 1,
      startSum: startMonthSum,
    });
    startMonthSum +=
      (i + 1) % extraInvestitionsPeriodity === 0
        ? extraInvestition
          ? extraInvestition
          : 0
        : 0;
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

function getYearsWithMonthsData(
  months: FinalAmounCalculationsResultPeriodData[]
): FinalAmounCalculationsResultYearData[] {
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
    year.data = year.monthsData.reduce(
      (acc: FinalAmounCalculationsResultPeriodData, month) => {
        acc.percentageIncome =
          (acc.percentageIncome || 0) + month.percentageIncome;
        acc.investments = (acc.investments || 0) + month.investments;
        return acc;
      }
    );
    year.data.resultSum = year.monthsData.at(-1)?.resultSum || 0;
    year.data.serialNumber = i + 1;
    year.data.startSum = year.monthsData[0].startSum;
  }
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
