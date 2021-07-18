import React from "react";
import { DeleteRoom, RoomDetails, RoomUsers } from "../../molecules";

const RoomSettings = (): JSX.Element => (
  <>
    <RoomDetails />
    <RoomUsers />
    <DeleteRoom />
  </>
);

export default RoomSettings;
