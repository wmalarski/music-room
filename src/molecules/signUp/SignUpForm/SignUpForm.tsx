import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input/Input";

export type SignUpFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignUpFormProps = {
  onSubmit: (data: SignUpFormData) => void;
};

const SignUpForm = ({ onSubmit }: SignUpFormProps): JSX.Element => {
  const { register, handleSubmit } = useForm<SignUpFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="email" placeholder="Email" {...register("email")} />
      <Input type="password" placeholder="Password" {...register("password")} />
      <Input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
