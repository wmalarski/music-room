import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      foreground: 'hsl(0, 0%, 100%)',
      background: 'hsl(0, 0%, 15%)',

      brand1: 'hsl(0, 100%, 10%)',
      brand2: 'hsl(0, 100%, 20%)',
      brand3: 'hsl(0, 100%, 30%)',
      brand4: 'hsl(0, 100%, 40%)',
      brand5: 'hsl(0, 100%, 50%)',
      brand6: 'hsl(0, 100%, 60%)',
      brand7: 'hsl(0, 100%, 70%)',
      brand8: 'hsl(0, 100%, 80%)',
      brand9: 'hsl(0, 100%, 90%)',

      gray1: 'hsl(0, 0%, 10%)',
      gray2: 'hsl(0, 0%, 20%)',
      gray3: 'hsl(0, 0%, 30%)',
      gray4: 'hsl(0, 0%, 40%)',
      gray5: 'hsl(0, 0%, 50%)',
      gray6: 'hsl(0, 0%, 60%)',
      gray7: 'hsl(0, 0%, 70%)',
      gray8: 'hsl(0, 0%, 85%)',
      gray9: 'hsl(0, 0%, 90%)',
      gray1A9: 'hsl(0, 0%, 10%, 0.9)',

      border1White3: '1px solid $gray3',
      border2Brand8: '2px solid $brand8',
    },
    fontSizes: {
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      xl2: '2rem',
      xl3: '3rem',
    },
    fontWeights: {
      thin: 100,
      regular: 400,
      bold: 700,
    },
    radii: {
      sm: '0.25rem',
      md: '0.5rem',
    },
    sizes: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    space: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    shadows: {
      small: '0 2px 10px $gray1A9',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 640px)',
  },
});

export const globalStyles = globalCss({
  html: {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    backgroundColor: '$background',
    color: '$foreground',
  },
  body: {
    padding: 0,
    margin: 0,
    backgroundColor: '$background',
    color: '$foreground',
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
});
