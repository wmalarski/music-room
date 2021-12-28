import NextLink, { LinkProps } from 'next/link';
import React, { PropsWithChildren } from 'react';

export const Link = (props: PropsWithChildren<LinkProps>): JSX.Element => (
  <NextLink {...props} />
);
