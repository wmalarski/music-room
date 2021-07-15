import React from "react";
import { useSignIn } from "../../../services/auth/signIn";
import SignInForm from "../SignInForm/SignInForm";

const SignIn = (): JSX.Element => {
  const { mutate: signUp } = useSignIn();

  return (
    <SignInForm
      onSubmit={(data) =>
        signUp({
          email: data.email,
          password: data.password,
        })
      }
    />
  );
};

export default SignIn;
