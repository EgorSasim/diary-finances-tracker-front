export interface ExpenseToIncomeLineChartItem {
  name: string;
  series: ExpenseToIncomeLineChartItemSerie[];
}

export interface ExpenseToIncomeLineChartItemSerie {
  name: Date;
  value: number;
}

export interface IncomeToExpenseChartItem {
  name: Date;
  series: IncomeToExpenseChartSerie[];
}

interface IncomeToExpenseChartSerie {
  name: string;
  value: number;
}
