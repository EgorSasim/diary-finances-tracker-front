import { Income } from '../../services/income/income.typings';

export function getIncomeTruthyTypes(income: Partial<Income>): Partial<Income> {
  return {
    ...income,
    date: income.date ? new Date(income.date) : undefined,
  };
}
