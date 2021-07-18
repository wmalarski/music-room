import React from "react";
import { useSignIn } from "../../../services/auth/signIn";
import SignInView from "../SignInView/SignInView";

const SignIn = (): JSX.Element => {
  const { mutate: signUp } = useSignIn();

  return (
    <SignInView
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
