import { keyframes, styled } from '@music-room/util-styles';
import { Inset } from '../Inset/Inset';

const skeletonAnimation = keyframes({
  '0%': { backgroundColor: '$gray2' },
  '50%': { backgroundColor: '$gray4' },
  '100%': { backgroundColor: '$gray2' },
});

export const SkeletonBox = styled(Inset, {
  '--base-skeleton-color': '$gray2',
  '--shine-skeleton-color': '$gray8',
  animation: `${skeletonAnimation} 2000ms infinite`,

  variants: {
    height: {
      xs: { height: '$xs' },
      sm: { height: '$sm' },
      md: { height: '$md' },
      lg: { height: '$lg' },
      xl: { height: '$xl' },
      fit: { height: '100%' },
    },
    width: {
      xs: { width: '$xs' },
      sm: { width: '$sm' },
      md: { width: '$md' },
      lg: { width: '$lg' },
      xl: { width: '$xl' },
      fit: { width: '100%' },
    },
  },

  defaultVariants: {
    height: 'fit',
    width: 'fit',
  },
});
