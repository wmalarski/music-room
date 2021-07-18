import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Typography } from "../../../atoms";
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
      <Typography>{text("signInHeader")}</Typography>
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
      <Button type="submit">{text("signInButton")}</Button>
    </form>
  );
};

export default SignInForm;
