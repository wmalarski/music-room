import { styled } from '@music-room/util-styles';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

export const Divider = styled(SeparatorPrimitive.Root, {
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },

  variants: {
    color: {
      1: { backgroundColor: '$gray1' },
      2: { backgroundColor: '$gray2' },
      3: { backgroundColor: '$gray3' },
      4: { backgroundColor: '$gray4' },
      5: { backgroundColor: '$gray5' },
      6: { backgroundColor: '$gray6' },
      7: { backgroundColor: '$gray7' },
      8: { backgroundColor: '$gray8' },
      9: { backgroundColor: '$gray9' },
    },
  },

  defaultVariants: {
    color: 8,
  },
});
