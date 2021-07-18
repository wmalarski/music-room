import { useRouter } from "next/router";
import React from "react";
import { useMemberContext } from "../../../utils/room/MemberContext";
import RoomNavigationView from "../RoomNavigationView/RoomNavigationView";

const RoomNavigation = (): JSX.Element => {
  const router = useRouter();
  const { slug } = useMemberContext();

  return (
    <RoomNavigationView
      onRoomClicked={() => router.push(`/room/${slug}`)}
      onSettingsClicked={() => router.push(`/room/${slug}/settings`)}
    />
  );
};

export default RoomNavigation;
