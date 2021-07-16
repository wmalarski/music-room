import { User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import React from "react";
import { useSelectRoomProfiles } from "../../../services/data/roomProfiles/selectRoomProfiles";
import RoomsList from "../RoomsList/RoomsList";

export type RoomsProps = {
  user: User;
};

const Rooms = ({ user }: RoomsProps): JSX.Element => {
  const router = useRouter();

  const { data: rooms } = useSelectRoomProfiles({ user_id: user.id });

  return (
    <RoomsList
      rooms={rooms?.pages.flat()}
      onRoomClick={(room) => router.push(`/room/${room.slug}`)}
    />
  );
};

export default Rooms;
