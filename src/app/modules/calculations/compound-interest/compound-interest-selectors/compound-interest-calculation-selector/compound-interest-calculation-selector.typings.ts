export enum CompoundInterestCalculationSelectorItem {
  FinalAmount = 'FinalAmount',
  Bid = 'Bid',
  StartUpCapital = 'StartUpCapital',
  AchievingGoalDeadline = 'AchievingGoalDeadline',
  ReplenishmentAmount = 'ReplenishmentAmount',
}

export const COMPOUND_INTEREST_CALCULATION_SELECTOR_ITEM_TO_TRANSLATION: {
  [key in CompoundInterestCalculationSelectorItem]: string;
} = {
  FinalAmount: 'compoundInterest.finalAmount',
  Bid: 'compoundInterest.bid',
  StartUpCapital: 'compoundInterest.startUpCapital',
  AchievingGoalDeadline: 'compoundInterest.achievingGoalDeadline',
  ReplenishmentAmount: 'compoundInterest.replenishmentAmount',
};
