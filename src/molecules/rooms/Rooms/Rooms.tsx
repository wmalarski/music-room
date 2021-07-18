import { User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import React from "react";
import { useSelectMembers } from "../../../services/data/members/selectMembers";
import RoomsList from "../RoomsList/RoomsList";

export type RoomsProps = {
  user: User;
};

const Rooms = ({ user }: RoomsProps): JSX.Element => {
  const router = useRouter();

  const { data: members } = useSelectMembers({ user_id: user.id });

  return (
    <RoomsList
      members={members?.pages.flat()}
      onRoomClick={(room) => router.push(`/room/${room.slug}`)}
    />
  );
};

export default Rooms;
