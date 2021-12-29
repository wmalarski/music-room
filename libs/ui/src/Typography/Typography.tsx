import { styled } from '@music-room/util-styles';

export const Typography = styled('p', {
  margin: 0,

  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      xl: { fontSize: '$xl' },
    },
    fontWeight: {
      thin: { fontWeight: '$thin' },
      regular: { fontWeight: '$regular' },
      bold: { fontWeight: '$bold' },
    },
    opacity: {
      0.8: { opacity: 0.8 },
      1: { opacity: 1 },
    },
  },

  defaultVariants: {
    size: 'sm',
    fontWeight: 'regular',
    opacity: '1',
  },
});
