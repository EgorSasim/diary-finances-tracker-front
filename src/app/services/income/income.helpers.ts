import { Income } from './income.typings';

export function getIncomeTruthyTypes(income: Income): Income {
  const truthyDate = new Date(
    Date.UTC(
      income.date.getFullYear(),
      income.date.getMonth(),
      income.date.getDate()
    )
  );
  return {
    ...income,
    date: truthyDate,
    type: income.type ? income.type : null,
  };
}
