import { Expense } from '../../services/expense/expense.typings';

export function getExpenseTruthyTypes(
  expense: Partial<Expense>
): Partial<Expense> {
  return {
    ...expense,
    date: expense.date ? new Date(expense.date) : undefined,
    amount: expense.amount ? +expense.amount : undefined,
  };
}
