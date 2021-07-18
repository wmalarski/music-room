import React, { DetailedHTMLProps, SelectHTMLAttributes } from "react";

const Select = (
  props: DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >,
  ref: React.LegacyRef<HTMLSelectElement>
): JSX.Element => <select {...props} ref={ref} />;

export default React.forwardRef(Select);
