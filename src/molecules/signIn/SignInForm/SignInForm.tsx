import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../atoms/Input/Input";
import useText from "../../../utils/translations/useText";

export type SignInFormData = {
  email: string;
  password: string;
};

export type SignInFormProps = {
  onSubmit: (data: SignInFormData) => void;
};

const SignInForm = ({ onSubmit }: SignInFormProps): JSX.Element => {
  const text = useText();

  const { register, handleSubmit } = useForm<SignInFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>{text("signInHeader")}</p>
      <Input
        placeholder={text("emailPlaceholder")}
        type="email"
        {...register("email")}
      />
      <Input
        placeholder={text("passwordPlaceholder")}
        type="password"
        {...register("password")}
      />
      <button type="submit">{text("signInButton")}</button>
    </form>
  );
};

export default SignInForm;
