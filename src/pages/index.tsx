import { useRouter } from "next/router";
import React from "react";
import Layout from "../atoms/Layout/Layout";
import { useUserContext } from "../molecules/auth/UserContext";
import CreateRoom from "../molecules/createRoom/CreateRoom/CreateRoom";
import SignIn from "../molecules/signIn/SignIn/SignIn";
import SignOut from "../molecules/signOut/SignOut/SignOut";
import SignUp from "../molecules/signUp/SignUp/SignUp";

const Index = (): JSX.Element => {
  const { user } = useUserContext();
  const router = useRouter();

  return (
    <Layout>
      {user ? (
        <div>
          <SignOut />
          <CreateRoom
            user={user}
            onSuccess={(room) => router.push(`/room/${room.slug}`)}
          />
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
