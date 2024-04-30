import { CompoundInterestReinvestmentPeriod } from './compound-interest-reinvestment-period.typings';

export const COMPOUND_INTEREST_REINVESTMENT_PERIOD_TO_TRANSLATE: {
  [key in CompoundInterestReinvestmentPeriod]: string;
} = {
  noReinvestment: 'app.noReinvestment',
  month: 'app.onceAMonth',
  quarter: 'app.onceAQuarter',
  halfYear: 'app.onceAHalfYear',
  year: 'app.onceAYear',
};
