import React from "react";
import Layout from "../atoms/Layout/Layout";
import { useUserContext } from "../molecules/auth/UserContext";
import CreateRoom from "../molecules/createRoom/CreateRoom/CreateRoom";
import Rooms from "../molecules/rooms/Rooms/Rooms";
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
          <CreateRoom user={user} />
          <Rooms user={user} />
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
