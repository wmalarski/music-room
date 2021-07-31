import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const Button = (
  {
    isLoading,
    ...props
  }: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { isLoading?: boolean },
  ref: React.LegacyRef<HTMLButtonElement>
): JSX.Element => (
  <button {...props} disabled={props.disabled || isLoading} ref={ref} />
);

export default React.forwardRef(Button);
