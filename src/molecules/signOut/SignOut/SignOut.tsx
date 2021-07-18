import React from "react";
import { useSignOut } from "../../../services/auth/signOut";
import SignOutView from "../SignOutView/SignOutView";

const SignOut = (): JSX.Element => {
  const { mutate: signOut } = useSignOut();

  return <SignOutView onSignOutClicked={signOut} />;
};

export default SignOut;
