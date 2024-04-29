export interface ExpenseDto {
  id: number;
  amount: number;
  type?: string | null;
  date: Date;
  comment?: string;
}
