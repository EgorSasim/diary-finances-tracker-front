import { ConvertToForm } from '../../../../typings/forms';
import { CompoundInterestExtraInvestmentPeriod } from '../compound-interest-selectors/compound-interest-extra-investments-period/compound-interest-extra-investments-period.typings';
import { InvestmentTermType } from '../compound-interest-selectors/compound-interest-investment-term/compound-interest-investment-term.typings';
import { CompoundInterestReinvestmentPeriod } from '../compound-interest-selectors/compound-interest-reinvestment-period/compound-interest-reinvestment-period.typings';

export interface CompoundInterestFinalAmount {
  startUpCapital: number;
  investmentTerm: number;
  ivestmentTermType: InvestmentTermType;
  bid: number;
  reinvestmentPeriod: CompoundInterestReinvestmentPeriod;
  extraInvestitions: number;
  extraInvestitionsType: CompoundInterestExtraInvestmentPeriod;
}

export type CompoundInterestFinalAmountForm =
  ConvertToForm<CompoundInterestFinalAmount>;
