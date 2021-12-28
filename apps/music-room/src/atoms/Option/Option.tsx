import React, { DetailedHTMLProps, OptionHTMLAttributes } from "react";

const Option = (
  props: DetailedHTMLProps<
    OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >,
  ref: React.LegacyRef<HTMLOptionElement>
): JSX.Element => <option {...props} ref={ref} />;

export default React.forwardRef(Option);
