import { User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { useSelectProfileRoles } from "../../../services/data/roles/selectProfileRoles";
import RoomsList from "../RoomsList/RoomsList";

export type RoomsProps = {
  user: User;
};

const Rooms = ({ user }: RoomsProps): JSX.Element => {
  const router = useRouter();

  const { data: roles } = useSelectProfileRoles({ userId: user.id });
  const rooms = useMemo(() => roles?.map((role) => role.room_id), [roles]);

  return (
    <RoomsList
      rooms={rooms}
      onRoomClick={(room) => router.push(`/room/${room.slug}`)}
    />
  );
};

export default Rooms;
