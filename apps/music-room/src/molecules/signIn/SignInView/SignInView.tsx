import { PostgrestError, User } from "@supabase/supabase-js";
import React from "react";
import { useForm } from "react-hook-form";
import { Alert, Button, Input, Typography } from "../../../atoms";
import useText from "../../../utils/translations/useText";
import { SignInViewData, useSignInViewOptions } from "./SignInView.utils";

export type SignInViewProps = {
  isLoading: boolean;
  error: PostgrestError | null;
  user?: User | null;
  onSubmit: (data: SignInViewData) => void;
};

const SignInView = ({
  isLoading,
  error,
  onSubmit,
}: SignInViewProps): JSX.Element => {
  const text = useText();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInViewData>();

  const options = useSignInViewOptions();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography>{text("signInHeader")}</Typography>
      <Input
        placeholder={text("emailPlaceholder")}
        type="email"
        {...register("email", options.email)}
      />
      {errors.email && <Alert severity="error">{errors.email.message}</Alert>}
      <Input
        placeholder={text("passwordPlaceholder")}
        type="password"
        {...register("password", options.password)}
      />
      {errors.password && (
        <Alert severity="error">{errors.password.message}</Alert>
      )}
      {error && <Alert severity="error">{error.message}</Alert>}
      <Button isLoading={isLoading} type="submit">
        {text("signInButton")}
      </Button>
    </form>
  );
};

export default SignInView;
