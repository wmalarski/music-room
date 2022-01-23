import { styled } from '@music-room/util-styles';

export const Container = styled('div', {
  height: 'calc(100vh - $xl)',
  width: '$xl',
  overflow: 'scroll',
  '&::-webkit-scrollbar': 'none',
});
