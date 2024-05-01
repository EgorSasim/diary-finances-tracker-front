import { ConvertToForm } from '../../../../typings/forms';
import { CompoundInterestExtraInvestmentPeriod } from '../compound-interest-selectors/compound-interest-extra-investments-period-selector/compound-interest-extra-investments-period.typings';
import { InvestmentTermType } from '../compound-interest-selectors/compound-interest-investment-term-selector/compound-interest-investment-term.typings';
import { CompoundInterestReinvestmentPeriod } from '../compound-interest-selectors/compound-interest-reinvestment-period-selector/compound-interest-reinvestment-period.typings';

export interface CompoundInterestFinalAmount {
  startUpCapital: number;
  investmentTerm: number;
  ivestmentTermType: InvestmentTermType;
  bid: number;
  reinvestmentPeriod: CompoundInterestReinvestmentPeriod;
  extraInvestment: number;
  extraInvestmentType: CompoundInterestExtraInvestmentPeriod;
}

export type CompoundInterestFinalAmountForm =
  ConvertToForm<CompoundInterestFinalAmount>;

export interface FinalAmounCalculationsResult {
  startSum: number;
  income: number;
  resultSum: number;
  replenishments: number;
  yearsData: FinalAmounCalculationsResultYearData[];
}

export interface FinalAmounCalculationsResultYearData {
  data: FinalAmounCalculationsResultPeriodData;
  monthsData: FinalAmounCalculationsResultPeriodData[];
}

export interface FinalAmounCalculationsResultPeriodData {
  serialNumber: number;
  startSum: number;
  percentageIncome: number;
  investments: number;
  resultSum: number;
}
