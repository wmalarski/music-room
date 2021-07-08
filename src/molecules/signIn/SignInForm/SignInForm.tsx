import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input/Input";

export type SignInFormData = {
  email: string;
  password: string;
};

export type SignInFormProps = {
  onSubmit: (data: SignInFormData) => void;
};

const SignInForm = ({ onSubmit }: SignInFormProps): JSX.Element => {
  const { register, handleSubmit } = useForm<SignInFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Email" type="email" {...register("email")} />
      <Input placeholder="Password" type="password" {...register("password")} />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
