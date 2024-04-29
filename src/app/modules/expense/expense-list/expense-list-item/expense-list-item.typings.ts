import { Expense } from '../../../../services/expense/expense.typings';

export type ExpenseListItem = Omit<Expense, 'comment'>;
