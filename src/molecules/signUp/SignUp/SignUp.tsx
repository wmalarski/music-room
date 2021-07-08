import React from "react";
import { useSignUp } from "../../../services/auth/signUp";
import SignUpForm from "../SignUpForm/SignUpForm";

const SignUp = (): JSX.Element => {
  const { data, mutate: signUp } = useSignUp();

  return (
    <div>
      <p>SignUp</p>
      <SignUpForm
        onSubmit={(data) =>
          signUp({
            email: data.email,
            password: data.password,
          })
        }
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default SignUp;