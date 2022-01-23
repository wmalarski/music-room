import { styled } from '@music-room/util-styles';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export const Avatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '100%',
  backgroundColor: '$gray3',

  variants: {
    size: {
      sm: {
        width: '$md',
        height: '$md',
      },
      md: {
        width: '$xl2',
        height: '$xl2',
      },
      lg: {
        width: '$xl3',
        height: '$xl3',
      },
    },
  },
});

export const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: '$gray1',
  fontSize: '$md',
  lineHeight: 1,
  fontWeight: '$regular',
});
