import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export type SeverityLevel = "error" | "warning" | "info" | "success";

const Alert = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
    severity: SeverityLevel;
  },
  ref: React.LegacyRef<HTMLSpanElement>
): JSX.Element => {
  const { severity, children, ...rest } = props;
  return (
    <span {...rest} ref={ref}>
      {severity}
      {children}
    </span>
  );
};

export default React.forwardRef(Alert);
