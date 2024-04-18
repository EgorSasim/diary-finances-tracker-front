export function getYearMonthDayDate(date: Date): Date {
  return new Date(date.toISOString().split('T')[0]);
}
