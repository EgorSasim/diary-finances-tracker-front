import { CompoundInterestExtraInvestmentPeriod } from './compound-interest-extra-investments-period.typings';

export const COMPOUND_INTEREST_EXTRA_INVESTMENT_PERIOD_TO_TRANSLATE: {
  [key in CompoundInterestExtraInvestmentPeriod]: string;
} = {
  month: 'app.onceAMonth',
  quarter: 'app.onceAQuarter',
  halfYear: 'app.onceAHalfYear',
  year: 'app.onceAYear',
};
