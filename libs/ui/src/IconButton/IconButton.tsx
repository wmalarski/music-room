import { styled } from '@music-room/util-styles';

export const IconButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  borderRadius: '100%',
  height: '$xl',
  width: '$xl',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray9',
  backgroundColor: '$gray3',
  boxShadow: '$smallGray',
  '&:hover': { color: '$brand8' },
  '&:focus': { outline: '$border2Brand8' },
});
