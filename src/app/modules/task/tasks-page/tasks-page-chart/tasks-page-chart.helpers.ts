import { TaskChartColor } from './tasks-page-chart-typings';
import { CHART_COLOR_SCHEME_NAME } from './tasks-page-chart.constants';

export function getTaskColorByHex(hex: string): TaskChartColor {
  const rgb = hexToRGB(hex);
  const red = rgb.r;
  const green = rgb.g;
  const blue = rgb.b;

  const luminosity = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

  if (luminosity > 230) {
    return 'White';
  } else if (luminosity < 20) {
    return 'Black';
  }

  if (red > green && red > blue) {
    if (red - green > 30 && red - blue > 20) {
      return 'Orange';
    } else if (red - blue > 50) {
      return 'Red';
    } else {
      return 'Pink';
    }
  } else if (green > red && green > blue) {
    return green - blue > 50 ? 'Green' : 'Yellow';
  } else if (blue > red && blue > green) {
    return blue - red > 50 ? 'Blue' : 'Purple';
  } else {
    const threshold = 30;
    if (Math.abs(red - green) < threshold && Math.abs(red - blue) < threshold) {
      return 'Brown';
    }
    return 'White';
  }
}

function hexToRGB(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hex
  ) as RegExpExecArray;
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

export function getRandChartColorTheme(): string {
  return Object.values(CHART_COLOR_SCHEME_NAME)[
    Math.floor(Math.random() * Object.keys(CHART_COLOR_SCHEME_NAME).length)
  ];
}
