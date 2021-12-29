import {
  DetailedHTMLProps,
  forwardRef,
  HTMLAttributes,
  LegacyRef,
  ReactElement,
} from 'react';

const TypographyInner = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >,
  ref: LegacyRef<HTMLParagraphElement>
): ReactElement => <p {...props} ref={ref} />;

export const Typography = forwardRef(TypographyInner);
