import { ConvertToForm } from '../../typings/forms';

export interface Income {
  id: number;
  amount: number;
  type: string;
  date: Date;
  comment: string;
}

export type IncomeSearchParams = Pick<Income, 'type' | 'date'>;

export type IncomeCreateForm = ConvertToForm<Omit<Income, 'id'>>;
