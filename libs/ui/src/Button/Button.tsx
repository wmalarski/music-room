import { styled } from '@music-room/util-styles';

export const Button = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  borderRadius: '$md',
  height: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray3',
  boxShadow: '$small',
  padding: '0 $md',
  border: '$border1Gray2',
  '&:hover': {
    // backgroundColor: '$gray1A9',
    color: '$brand9',
    border: '$border1Brand8',
  },
  '&:focus': { outline: '$border1Brand9' },

  variants: {
    primary: {
      true: {
        color: '$gray1',
        backgroundColor: '$gray9',
        '&:hover': { backgroundColor: '$brand9', color: '$gray1' },
        '&:focus': {
          outline: '$border1Brand8',
        },
      },
    },
    isLoading: {
      true: { color: '$gray5' },
    },
  },
});
