import { ConvertToForm } from '../../typings/forms';

export interface IncomeType {
  id: number;
  name: string;
}

export type IncomeTypeSearchParams = Pick<IncomeType, 'name'>;
export type IncomeTypeCreateForm = ConvertToForm<Omit<IncomeType, 'id'>>;
