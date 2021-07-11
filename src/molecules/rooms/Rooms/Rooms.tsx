import { User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import React from "react";
import { useSelectRoomRoles } from "../../../services/data/roomRoles/selectRoomRoles";
import RoomsList from "../RoomsList/RoomsList";

export type RoomsProps = {
  user: User;
};

const Rooms = ({ user }: RoomsProps): JSX.Element => {
  const router = useRouter();

  const { data: rooms } = useSelectRoomRoles({ user_id: user.id });

  return (
    <RoomsList
      rooms={rooms}
      onRoomClick={(room) => router.push(`/room/${room.slug}`)}
    />
  );
};

export default Rooms;
