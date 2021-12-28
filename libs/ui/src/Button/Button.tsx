import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export const ButtonInner = (
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

export const Button = React.forwardRef(ButtonInner);
