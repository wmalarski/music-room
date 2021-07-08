import { User } from "@supabase/supabase-js";
import React from "react";
import { useSelectProfile } from "../../../services/data/profiles/selectProfile";
import { useInsertRoom } from "../../../services/data/rooms/insertRoom";
import { Room } from "../../../services/data/types";
import CreateRoomForm from "../CreateRoomForm/CreateRoomForm";

export type CreateRoomProps = {
  user: User;
  onSuccess: (room: Room) => void;
};

const CreateRoom = ({
  user,
  onSuccess,
}: CreateRoomProps): JSX.Element | null => {
  const { data: profile } = useSelectProfile({ userId: user.id });
  const { mutate: insertRoom } = useInsertRoom({ onSuccess });

  return profile ? (
    <CreateRoomForm
      onSubmit={({ name }) =>
        insertRoom({
          author_id: profile?.id,
          name: name,
          slug: name.replace(/\s/g, "_"),
          data: { kind: "room-0.0.1" },
        })
      }
    />
  ) : null;
};

export default CreateRoom;
