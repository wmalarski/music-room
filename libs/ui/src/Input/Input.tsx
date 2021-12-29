import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  LegacyRef,
  ReactElement,
} from 'react';

const InputInner = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  ref: LegacyRef<HTMLInputElement>
): ReactElement => <input {...props} ref={ref} />;

export const Input = forwardRef(InputInner);
