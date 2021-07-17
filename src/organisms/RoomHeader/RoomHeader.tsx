import React from "react";
import Navigation from "../../molecules/navigation/Navigation/Navigation";
import ProfileNavigation from "../../molecules/profileNavigation/ProfileNavigation/ProfileNavigation";
import RoomNavigation from "../../molecules/roomNavigation/RoomNavigation/RoomNavigation";
import SignOut from "../../molecules/signOut/SignOut/SignOut";

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
