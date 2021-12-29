import NextLink, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

export const Link = (props: PropsWithChildren<LinkProps>): JSX.Element => (
  <NextLink {...props} />
);
