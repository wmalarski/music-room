import React from "react";
import Navigation from "../../molecules/navigation/Navigation/Navigation";
import RoomNavigation from "../../molecules/roomNavigation/RoomNavigation/RoomNavigation";
import SignOut from "../../molecules/signOut/SignOut/SignOut";

const RoomHeader = (): JSX.Element => (
  <Navigation
    right={
      <>
        <RoomNavigation />
        <SignOut />
      </>
    }
  />
);

export default RoomHeader;
