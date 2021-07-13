import { useRouter } from "next/router";
import React from "react";
import { RoomProfile } from "../../../services/data/types";
import RoomNavigationBar from "../RoomNavigationBar/RoomNavigationBar";

export type RoomNavigationProps = {
  room: RoomProfile;
};

const RoomNavigation = ({ room }: RoomNavigationProps): JSX.Element => {
  const router = useRouter();

  return (
    <RoomNavigationBar
      onRoomClicked={() => router.push(`/room/${room.slug}`)}
      onSettingsClicked={() => router.push(`/room/${room.slug}/settings`)}
    />
  );
};

export default RoomNavigation;
