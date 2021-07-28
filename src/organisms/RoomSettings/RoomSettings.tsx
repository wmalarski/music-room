import React from "react";
import { DeleteRoom, RoomDetails, RoomForm, RoomUsers } from "../../molecules";
import useRoleGuard from "../../utils/room/useRoleGuard";

const RoomSettings = (): JSX.Element => (
  <>
    {useRoleGuard({
      owner: <RoomForm />,
      mod: <RoomForm />,
      default: <RoomDetails />,
    })}
    <RoomUsers />
    <DeleteRoom />
  </>
);

export default RoomSettings;
