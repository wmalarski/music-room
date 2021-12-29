import {
  DetailedHTMLProps,
  forwardRef,
  LegacyRef,
  OptionHTMLAttributes,
  ReactElement,
} from 'react';

const OptionInner = (
  props: DetailedHTMLProps<
    OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >,
  ref: LegacyRef<HTMLOptionElement>
): ReactElement => <option {...props} ref={ref} />;

export const Option = forwardRef(OptionInner);
