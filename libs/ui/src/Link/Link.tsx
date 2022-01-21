import { styled } from '@music-room/util-styles';

export const StyledLink = styled('a', {
  color: '$brand9',
  textDecoration: 'none',
  '&:hover': {
    color: '$brand8',
    textDecoration: 'underline',
  },
});

export const CircleLink = styled('a', {
  textDecoration: 'unset',
  outline: 'none',
  borderRadius: '100%',
  height: '$xl',
  width: '$xl',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray9',
  backgroundColor: '$gray1',
  boxShadow: '$smallGray',
  '&:hover': { backgroundColor: '$gray3', color: '$brand8' },
  '&:focus': { outline: '$border2Brand8' },
});
