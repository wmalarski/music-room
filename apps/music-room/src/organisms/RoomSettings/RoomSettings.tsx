import React from "react";
import { DeleteRoom, RoomDetails, RoomForm, RoomUsers } from "../../molecules";
import useRoleGuard from "../../utils/room/useRoleGuard";

const RoomSettings = (): JSX.Element => (
  <>
    {useRoleGuard({
      owner: (
        <>
          <RoomForm />
          <DeleteRoom />
        </>
      ),
      mod: <RoomForm />,
      default: <RoomDetails />,
    })}
    <RoomUsers />
  </>
);

export default RoomSettings;
