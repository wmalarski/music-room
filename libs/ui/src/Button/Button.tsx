import { styled } from '@music-room/util-styles';

export const Button = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  borderRadius: '$md',
  height: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray9',
  backgroundColor: '$gray1',
  boxShadow: '$small',
  padding: '0 $md',
  '&:hover': { backgroundColor: '$gray1', color: '$brand8' },
  '&:focus': { outline: '$border2Brand8' },

  variants: {
    primary: {
      true: {
        color: '$gray1',
        backgroundColor: '$gray9',
        '&:hover': { backgroundColor: '$brand9', color: '$gray1' },
        '&:focus': {
          outline: '$border2Brand8',
        },
      },
    },
    isLoading: {
      true: { color: '$gray5' },
    },
  },
});
