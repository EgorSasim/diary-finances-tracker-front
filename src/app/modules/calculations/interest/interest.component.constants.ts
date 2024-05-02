import { InterestSelector } from './interest-selector/interest-selector.constants';

export const InterestSelectorToCalculationsText: Record<
  InterestSelector,
  string[]
> = {
  PercentFromNumber: ['app.percent', 'app.from', 'app.number'],
  PercentOneNumberFromAnother: ['app.number', 'app.from', 'app.number'],
  AddPercentToNumber: ['app.number', '+', 'app.percent'],
  SubstractPercentFromNumber: ['app.number', '-', 'app.percent'],
  PercentsOneNumberMoreAnother: ['app.number', '>', 'app.percent'],
  PercentsOneNumberLessAnother: ['app.number', '<', 'app.percent'],
  HundredPercents: ['app.number', 'app.amountsTo', 'app.percent'],
};
