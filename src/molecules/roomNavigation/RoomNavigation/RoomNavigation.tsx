import { useRouter } from "next/router";
import React from "react";
import { useRoomContext } from "../../../utils/room/RoomContext";
import RoomNavigationBar from "../RoomNavigationBar/RoomNavigationBar";

const RoomNavigation = (): JSX.Element => {
  const router = useRouter();
  const { slug } = useRoomContext();

  return (
    <RoomNavigationBar
      onRoomClicked={() => router.push(`/room/${slug}`)}
      onSettingsClicked={() => router.push(`/room/${slug}/settings`)}
    />
  );
};

export default RoomNavigation;
