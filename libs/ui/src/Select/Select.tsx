import {
  DetailedHTMLProps,
  forwardRef,
  LegacyRef,
  ReactElement,
  SelectHTMLAttributes,
} from 'react';

const SelectInner = (
  props: DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >,
  ref: LegacyRef<HTMLSelectElement>
): ReactElement => <select {...props} ref={ref} />;

export const Select = forwardRef(SelectInner);
