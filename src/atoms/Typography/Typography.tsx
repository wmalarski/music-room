import React, { DetailedHTMLProps, HTMLAttributes } from "react";

const Typography = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >,
  ref: React.LegacyRef<HTMLParagraphElement>
): JSX.Element => <p {...props} ref={ref} />;

export default React.forwardRef(Typography);
