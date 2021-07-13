import React from "react";
import Layout from "../atoms/Layout/Layout";
import CreateRoom from "../molecules/createRoom/CreateRoom/CreateRoom";
import Navigation from "../molecules/navigation/Navigation/Navigation";
import Rooms from "../molecules/rooms/Rooms/Rooms";
import SignIn from "../molecules/signIn/SignIn/SignIn";
import SignOut from "../molecules/signOut/SignOut/SignOut";
import SignUp from "../molecules/signUp/SignUp/SignUp";
import { useUserContext } from "../utils/auth/UserContext";

const Index = (): JSX.Element => {
  const { user } = useUserContext();

  return (
    <Layout header={<Navigation right={user && <SignOut />} />}>
      {user ? (
        <div>
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
