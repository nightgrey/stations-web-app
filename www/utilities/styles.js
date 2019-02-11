import Typography from 'typography';
import grayPercentage from 'gray-percentage';
import { css } from 'styled-components';

/**
 * Media queries
 */
export const breakpoints = {
  s: 640,
  m: 768,
  l: 1024,
  container: 1200,
};

// Iterate through the sizes and create a media template
export const mediaQuery = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 18}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

/**
 * Typography
 */
export const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Georgia', 'serif'],
  bodyColor: '#444',
});

export const rhythm = typography.rhythm;


/**
 * Colors
 */
export const gray = (lightness, darkBackground = false) => grayPercentage(lightness, 240, darkBackground);

export const colors = {
  primary: '#8ACB88',
  secondary: '#648381',
  tertiary: '#FFBF46',
  quaternary: null,
};
