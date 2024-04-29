import { ConvertToForm } from '../../typings/forms';

export interface Expense {
  id: number;
  amount: number;
  type?: string | null;
  date: Date;
  comment?: string;
}

export type ExpenseSearchParams = Partial<
  Pick<Expense, 'type' | 'date' | 'amount'>
>;

export type ExpenseSearchParamsForm = ConvertToForm<ExpenseSearchParams>;

export type ExpenseCreateForm = ConvertToForm<Omit<Expense, 'id'>>;
export type ExpenseEditForm = ConvertToForm<Expense>;
