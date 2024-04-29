import { ConvertToForm } from '../../typings/forms';

export interface Income {
  id: number;
  amount: number;
  type?: string | null;
  date: Date;
  comment?: string;
}

export type IncomeSearchParams = Partial<
  Pick<Income, 'type' | 'date' | 'amount'>
>;

export type IncomeSearchParamsForm = ConvertToForm<IncomeSearchParams>;

export type IncomeCreateForm = ConvertToForm<Omit<Income, 'id'>>;
export type IncomeEditForm = ConvertToForm<Income>;
