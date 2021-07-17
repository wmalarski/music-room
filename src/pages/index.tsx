import React from "react";
import CreateRoom from "../molecules/createRoom/CreateRoom/CreateRoom";
import Rooms from "../molecules/rooms/Rooms/Rooms";
import SignIn from "../molecules/signIn/SignIn/SignIn";
import SignUp from "../molecules/signUp/SignUp/SignUp";
import UserHeader from "../organisms/UserHeader/UserHeader";
import GuestHomeTemplate from "../templates/GuestHomeTemplate/GuestHomeTemplate";
import UserHomeTemplate from "../templates/UserHomeTemplate/UserHomeTemplate";
import { useUserContext } from "../utils/auth/UserContext";

const Index = (): JSX.Element => {
  const { user } = useUserContext();

  return user ? (
    <UserHomeTemplate
      header={<UserHeader user={user} />}
      left={<CreateRoom user={user} />}
      center={<Rooms user={user} />}
    />
  ) : (
    <GuestHomeTemplate left={<SignIn />} right={<SignUp />} />
  );
};

export default Index;
