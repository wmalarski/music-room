import { DetailedHTMLProps, OptionHTMLAttributes } from 'react';

const OptionInner = (
  props: DetailedHTMLProps<
    OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >,
  ref: React.LegacyRef<HTMLOptionElement>
): JSX.Element => <option {...props} ref={ref} />;

export const Option = React.forwardRef(OptionInner);
