import React from "react";
import { useSignOut } from "../../../services/auth/signOut";

const SignOut = (): JSX.Element => {
  const { mutate: signOut } = useSignOut();

  return <button onClick={() => signOut()}>SignOut</button>;
};

export default SignOut;
