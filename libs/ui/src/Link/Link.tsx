import { styled } from '@music-room/util-styles';
import NextLink from 'next/link';

export const Link = styled(NextLink, {
  color: '$brand9',
  textDecoration: 'none',
  '&:hover': {
    color: '$brand8',
    textDecoration: 'underline',
  },
});

export const StyledLink = styled('a', {
  color: '$brand9',
  textDecoration: 'none',
  '&:hover': {
    color: '$brand8',
    textDecoration: 'underline',
  },
});
