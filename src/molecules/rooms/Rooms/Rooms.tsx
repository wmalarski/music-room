import { User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import React from "react";
import { useSelectMembers } from "../../../services/data/members/selectMembers";
import RoomsList, { RoomsListProps } from "../RoomsList/RoomsList";

export type RoomsProps = {
  user: User;
  View?: React.ComponentType<RoomsListProps>;
};

const Rooms = ({ user, View = RoomsList }: RoomsProps): JSX.Element => {
  const router = useRouter();

  const { data: members } = useSelectMembers({ user_id: user.id });

  return (
    <View
      members={members?.pages.flat()}
      onRoomClick={(room) => router.push(`/room/${room.slug}`)}
    />
  );
};

export default Rooms;
