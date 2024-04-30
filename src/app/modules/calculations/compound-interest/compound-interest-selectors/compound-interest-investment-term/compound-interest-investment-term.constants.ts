import { InvestmentTermType } from './compound-interest-investment-term.typings';

export const INVESTMENT_TERM_TYPE_TO_TRANSLATION: {
  [key in InvestmentTermType]: string;
} = {
  month: 'app.month',
  year: 'app.year',
};
