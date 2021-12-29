import NextLink, { LinkProps } from 'next/link';
import { PropsWithChildren, ReactElement } from 'react';

export const Link = (props: PropsWithChildren<LinkProps>): ReactElement => (
  <NextLink {...props} />
);
