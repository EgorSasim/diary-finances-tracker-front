import { Expense } from './expense.typings';

export function getExpenseTruthyTypes(expense: Expense): Expense {
  const truthyDate = new Date(
    Date.UTC(
      expense.date.getFullYear(),
      expense.date.getMonth(),
      expense.date.getDate()
    )
  );
  return {
    ...expense,
    date: truthyDate,
    type: expense.type ? expense.type : null,
  };
}
