import { useRouter } from "next/router";
import React from "react";
import { useRoomContext } from "../../../utils/room/RoomContext";
import RoomNavigationView from "../RoomNavigationView/RoomNavigationView";

const RoomNavigation = (): JSX.Element => {
  const router = useRouter();
  const { slug } = useRoomContext();

  return (
    <RoomNavigationView
      onRoomClicked={() => router.push(`/room/${slug}`)}
      onSettingsClicked={() => router.push(`/room/${slug}/settings`)}
    />
  );
};

export default RoomNavigation;
