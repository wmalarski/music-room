import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../atoms/Input/Input";
import useText from "../../../utils/translations/useText";

export type SignUpFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignUpFormProps = {
  onSubmit: (data: SignUpFormData) => void;
};

const SignUpForm = ({ onSubmit }: SignUpFormProps): JSX.Element => {
  const text = useText();

  const { register, handleSubmit } = useForm<SignUpFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>{text("signUpHeader")}</p>
      <Input
        type="email"
        placeholder={text("emailPlaceholder")}
        {...register("email")}
      />
      <Input
        type="password"
        placeholder={text("passwordPlaceholder")}
        {...register("password")}
      />
      <Input
        type="password"
        placeholder={text("confirmPasswordPlaceholder")}
        {...register("confirmPassword")}
      />
      <button type="submit">{text("signUpButton")}</button>
    </form>
  );
};

export default SignUpForm;
