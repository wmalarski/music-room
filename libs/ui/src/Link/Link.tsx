import NextLink, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

const Link = (props: PropsWithChildren<LinkProps>): JSX.Element => (
  <NextLink {...props} />
);

export default Link;
