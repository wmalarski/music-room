import React from "react";
import {
  Navigation,
  ProfileNavigation,
  RoomNavigation,
  SignOut,
} from "../../molecules";

const RoomHeader = (): JSX.Element => (
  <Navigation
    right={
      <>
        <RoomNavigation />
        <ProfileNavigation />
        <SignOut />
      </>
    }
  />
);

export default RoomHeader;
