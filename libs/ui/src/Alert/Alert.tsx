import {
  DetailedHTMLProps,
  forwardRef,
  HTMLAttributes,
  LegacyRef,
  ReactElement,
} from 'react';

export type SeverityLevel = 'error' | 'warning' | 'info' | 'success';

const AlertInner = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
    severity: SeverityLevel;
  },
  ref: LegacyRef<HTMLSpanElement>
): ReactElement => {
  const { severity, children, ...rest } = props;
  return (
    <span {...rest} ref={ref}>
      {severity}
      {children}
    </span>
  );
};

export const Alert = forwardRef(AlertInner);
