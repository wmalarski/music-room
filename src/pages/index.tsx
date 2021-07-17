import React from "react";
import CreateRoom from "../molecules/createRoom/CreateRoom/CreateRoom";
import Rooms from "../molecules/rooms/Rooms/Rooms";
import SignIn from "../molecules/signIn/SignIn/SignIn";
import SignUp from "../molecules/signUp/SignUp/SignUp";
import UserHeader from "../organisms/UserHeader/UserHeader";
import Layout from "../templates/Layout/Layout";
import { useUserContext } from "../utils/auth/UserContext";

const Index = (): JSX.Element => {
  const { user } = useUserContext();

  return (
    <Layout header={<UserHeader user={user} />}>
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
