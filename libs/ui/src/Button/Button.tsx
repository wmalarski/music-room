import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  LegacyRef,
} from 'react';

export const ButtonInner = (
  {
    isLoading,
    ...props
  }: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { isLoading?: boolean },
  ref: LegacyRef<HTMLButtonElement>
): JSX.Element => (
  <button {...props} disabled={props.disabled || isLoading} ref={ref} />
);

export const Button = forwardRef(ButtonInner);
