import { Expense } from '../../services/expense/expense.typings';
import { Income } from '../../services/income/income.typings';
import {
  ExpenseToIncomeLineChartItem,
  ExpenseToIncomeLineChartItemSerie,
  IncomeToExpenseChartItem,
} from './balance-page.typings';

export function getIncomeToExpenseChartData(
  expenses: Expense[],
  incomes: Income[]
): IncomeToExpenseChartItem[] {
  const onlyExpensesValues: IncomeToExpenseChartItem[] = expenses
    .filter(
      (expense) => !incomes.map((income) => income.date).includes(expense.date)
    )
    .map((expense) => ({
      name: expense.date,
      series: [
        {
          name: 'expense',
          value: +expense.amount,
        },
      ],
    }));
  const onlyIncomesValues: IncomeToExpenseChartItem[] = incomes
    .filter(
      (income) => !expenses.map((expense) => expense.date).includes(income.date)
    )
    .map((income) => ({
      name: income.date,
      series: [
        {
          name: 'income',
          value: +income.amount,
        },
      ],
    }));
  const sameDatesValues: IncomeToExpenseChartItem[] = incomes
    .filter((income) =>
      expenses.map((expense) => expense.date).includes(income.date)
    )
    .map((income) => ({
      name: income.date,
      series: [
        {
          name: 'income',
          value: +income.amount,
        },
        {
          name: 'expense',
          value:
            +(
              expenses.find(
                (expense) => expense.date === income.date
              ) as Expense
            ).amount || 0,
        },
      ],
    }));
  const result = onlyExpensesValues
    .concat(onlyIncomesValues, sameDatesValues)
    .sort(
      (item1, item2) =>
        new Date(item1.name).getTime() - new Date(item2.name).getTime()
    );
  return result;
}

export function getBalanceValue(
  expenses: Expense[],
  incomes: Income[]
): number {
  const expenseSum = expenses.reduce(
    (acc, expense) => (acc += +expense.amount),
    0
  );
  const incomeSum = incomes.reduce((acc, income) => (acc += +income.amount), 0);
  return +(incomeSum - expenseSum).toFixed(3);
}

export function getExpenseToIncomeLineChartData(
  expenses: Expense[],
  incomes: Income[]
): ExpenseToIncomeLineChartItem[] {
  const expenseSeries: ExpenseToIncomeLineChartItemSerie[] = expenses.map(
    (expense) => ({
      name: expense.date,
      value: +expense.amount,
    })
  );
  const incomeSeries: ExpenseToIncomeLineChartItemSerie[] = incomes.map(
    (income) => ({
      name: income.date,
      value: +income.amount,
    })
  );
  const result = [
    {
      name: 'incomes',
      series: incomeSeries,
    },
    {
      name: 'expenses',
      series: expenseSeries,
    },
  ];
  console.log('result: ', result);
  return result;
}
