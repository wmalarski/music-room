import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

const Input = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
): JSX.Element => <input {...props} />;

export default Input;
