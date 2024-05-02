export interface FinalAmounCalculationsResultYearData {
  data: FinalAmounCalculationsResultPeriodData;
  monthsData: FinalAmounCalculationsResultPeriodData[];
}

export interface FinalAmounCalculationsResultPeriodData {
  serialNumber: number;
  startSum: number;
  percentageIncome: number;
  investments: number;
  resultSum: number;
}
