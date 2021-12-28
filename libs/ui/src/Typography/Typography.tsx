import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

const TypographyInner = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >,
  ref: React.LegacyRef<HTMLParagraphElement>
): JSX.Element => <p {...props} ref={ref} />;

export const Typography = React.forwardRef(TypographyInner);
