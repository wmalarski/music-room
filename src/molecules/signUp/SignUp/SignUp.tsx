import React from "react";
import { Debug } from "../../../atoms";
import { useSignUp } from "../../../services/auth/signUp";
import SignUpForm from "../SignUpForm/SignUpForm";

const SignUp = (): JSX.Element => {
  const { data, mutate: signUp } = useSignUp();

  return (
    <>
      <SignUpForm
        onSubmit={(data) =>
          signUp({
            email: data.email,
            password: data.password,
          })
        }
      />
      <Debug value={data} />
    </>
  );
};

export default SignUp;
