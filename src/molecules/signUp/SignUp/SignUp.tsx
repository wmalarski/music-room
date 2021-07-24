import React from "react";
import { Debug } from "../../../atoms";
import { useSignUp } from "../../../services/auth/signUp";
import SignUpView, { SignUpViewProps } from "../SignUpView/SignUpView";

export type SignUpProps = {
  View?: React.ComponentType<SignUpViewProps>;
};

const SignUp = ({ View = SignUpView }: SignUpProps): JSX.Element => {
  const { data, mutate: signUp } = useSignUp();

  return (
    <>
      <View
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
