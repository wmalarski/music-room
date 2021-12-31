import { styled } from '@music-room/util-styles';

export const Input = styled('input', {
  all: 'unset',
  flex: '1 0 auto',
  borderRadius: '$md',
  padding: '0 $sm',
  fontSize: '$sm',
  lineHeight: 1,
  border: '$border1Gray3',
  boxShadow: '$bottom1',
  height: '$xl',
  '&:focus': {
    boxShadow: '$bottom2',
    border: '$border1Brand8',
  },
});
