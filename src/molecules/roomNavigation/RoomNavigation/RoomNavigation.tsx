import { useRouter } from "next/router";
import React from "react";
import { useMemberContext } from "../../../utils/room/MemberContext";
import RoomNavigationView, {
  RoomNavigationViewProps,
} from "../RoomNavigationView/RoomNavigationView";

export type RoomNavigationProps = {
  View?: React.ComponentType<RoomNavigationViewProps>;
};

const RoomNavigation = ({
  View = RoomNavigationView,
}: RoomNavigationProps): JSX.Element => {
  const router = useRouter();
  const { slug } = useMemberContext();

  return (
    <View
      onRoomClicked={() => router.push(`/room/${slug}`)}
      onSettingsClicked={() => router.push(`/room/${slug}/settings`)}
    />
  );
};

export default RoomNavigation;
