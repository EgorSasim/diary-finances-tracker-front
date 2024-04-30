import { ConvertToForm } from '../../typings/forms';

export interface ExpenseType {
  id: number;
  name: string;
}

export type ExpenseTypeSearchParams = Pick<ExpenseType, 'name'>;
export type ExpenseTypeCreateForm = ConvertToForm<Omit<ExpenseType, 'id'>>;
