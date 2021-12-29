import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

const SelectInner = (
  props: DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >,
  ref: React.LegacyRef<HTMLSelectElement>
): JSX.Element => <select {...props} ref={ref} />;

export const Select = React.forwardRef(SelectInner);
