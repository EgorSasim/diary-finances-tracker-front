export interface IncomeDto {
  id: number;
  amount: number;
  type?: string | null;
  date: Date;
  comment?: string;
}
