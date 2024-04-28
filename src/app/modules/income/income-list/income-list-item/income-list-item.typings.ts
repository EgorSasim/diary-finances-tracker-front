import { Income } from '../../../../services/income/income.typings';

export type IncomeListItem = Omit<Income, 'comment'>;
