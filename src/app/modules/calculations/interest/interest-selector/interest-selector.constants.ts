export enum InterestSelector {
  PercentFromNumber = 'PercentFromNumber',
  PercentOneNumberFromAnother = 'PercentOneNumberFromAnother',
  AddPercentToNumber = 'AddPercentToNumber',
  SubstractPercentFromNumber = 'SubstractPercentFromNumber',
  PercentsOneNumberMoreAnother = 'PercentsOneNumberMoreAnother',
  PercentsOneNumberLessAnother = 'PercentsOneNumberLessAnother',
  HundredPercents = 'HundredPercents',
}

export const InterestSelectorToTranslations: Record<InterestSelector, string> =
  {
    PercentFromNumber: 'interest.select.percentFromNumber',
    PercentOneNumberFromAnother: 'interest.select.percentOneNumberFromAnother',
    AddPercentToNumber: 'interest.select.addPercentToNumber',
    SubstractPercentFromNumber: 'interest.select.substractPercentFromNumber',
    PercentsOneNumberMoreAnother:
      'interest.select.percentsOneNumberMoreAnother',
    PercentsOneNumberLessAnother:
      'interest.select.percentsOneNumberLessAnother',
    HundredPercents: 'interest.select.hundredPercents',
  };
