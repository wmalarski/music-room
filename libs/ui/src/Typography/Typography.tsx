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
    kind: {
      normal: { color: '$foreground' },
      description: { color: '$gray7' },
      error: { color: '$error1' },
    },
  },

  defaultVariants: {
    size: 'sm',
    fontWeight: 'regular',
    kind: 'normal',
  },
});
