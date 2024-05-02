export interface CompoundInterestGrowthChartItem {
  name: string;
  series: CompoundInterestGrowthChartItemSerie[];
}

export interface CompoundInterestGrowthChartItemSerie {
  name: number;
  value: number;
}
