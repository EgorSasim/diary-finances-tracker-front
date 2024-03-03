import { Theme } from '../../../common/services/themes/themes.constants';

export const THEMES_INFO: {
  [key in Theme]: { hexColor: string };
} = {
  [Theme.Blue]: { hexColor: '#03A9F4' },
  [Theme.BlueDark]: { hexColor: '#01579B' },
  [Theme.Green]: { hexColor: '#4CAF50' },
  [Theme.GreenDark]: { hexColor: '#1B5E20' },
  [Theme.Orange]: { hexColor: '#FF5722' },
  [Theme.OrangeDark]: { hexColor: '#BF360C' },
  [Theme.Purple]: { hexColor: '#673AB7' },
  [Theme.PurpleDark]: { hexColor: '#311B92' },
  [Theme.Red]: { hexColor: '#FF5722' },
  [Theme.RedDark]: { hexColor: '#BF360C' },
  [Theme.Yellow]: { hexColor: '#FFEB3B' },
  [Theme.YellowDark]: { hexColor: '#F57F17' },
};
