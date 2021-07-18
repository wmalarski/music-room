import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Typography } from "../../../atoms";
import useText from "../../../utils/translations/useText";

export type SignUpViewData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignUpViewProps = {
  onSubmit: (data: SignUpViewData) => void;
};

const SignUpView = ({ onSubmit }: SignUpViewProps): JSX.Element => {
  const text = useText();

  const { register, handleSubmit } = useForm<SignUpViewData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography>{text("signUpHeader")}</Typography>
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
      <Button type="submit">{text("signUpButton")}</Button>
    </form>
  );
};

export default SignUpView;
