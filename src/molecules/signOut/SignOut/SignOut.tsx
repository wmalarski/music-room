import React from "react";
import { useSignOut } from "../../../services/auth/signOut";
import SignOutForm from "../SignOutForm/SignOutForm";

const SignOut = (): JSX.Element => {
  const { mutate: signOut } = useSignOut();

  return <SignOutForm onSignOutClicked={signOut} />;
};

export default SignOut;
