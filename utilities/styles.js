import Typography from 'typography';
import grayPercentage from 'gray-percentage';

export const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  bodyFontFamily: ['Georgia', 'serif'],
  bodyColor: '#444',
});

export const rhythm = typography.rhythm;

export const gray = (lightness, darkBackground = false) =>
  grayPercentage(lightness, 240, darkBackground);

export const colors = {
  primary: '#8ACB88',
  secondary: '#648381',
  tertiary: '#FFBF46',
  quaternary: null
};