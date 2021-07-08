import React from "react";
import { useSignIn } from "../../../services/auth/signIn";
import SignInForm from "../SignInForm/SignInForm";

const SignIn = (): JSX.Element => {
  const { data, mutate: signUp } = useSignIn();

  return (
    <div>
      <p>SignIn</p>
      <SignInForm
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

export default SignIn;
