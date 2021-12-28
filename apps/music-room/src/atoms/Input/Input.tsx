import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

const Input = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  ref: React.LegacyRef<HTMLInputElement>
): JSX.Element => <input {...props} ref={ref} />;

export default React.forwardRef(Input);
