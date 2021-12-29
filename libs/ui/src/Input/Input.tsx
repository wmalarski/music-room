import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

const InputInner = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  ref: React.LegacyRef<HTMLInputElement>
): JSX.Element => <input {...props} ref={ref} />;

export const Input = React.forwardRef(InputInner);
