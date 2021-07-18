import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  ref: React.LegacyRef<HTMLButtonElement>
): JSX.Element => <button {...props} ref={ref} />;

export default React.forwardRef(Button);
