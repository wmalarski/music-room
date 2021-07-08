import React from "react";
import Layout from "../components/Layout/Layout";
import { useUserContext } from "../molecules/auth/UserContext";
import SignIn from "../molecules/signIn/SignIn/SignIn";
import SignOut from "../molecules/signOut/SignOut/SignOut";
import SignUp from "../molecules/signUp/SignUp/SignUp";

const Index = (): JSX.Element => {
  const { user } = useUserContext();

  return (
    <Layout>
      {user ? (
        <div>
          <SignOut />
        </div>
      ) : (
        <div>
          <SignIn />
          <SignUp />
        </div>
      )}
    </Layout>
  );
};

export default Index;
