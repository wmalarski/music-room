import { User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import React from "react";
import { useSelectProfile } from "../../../services/data/profiles/selectProfile";
import { useInsertRoom } from "../../../services/data/rooms/insertRoom";
import CreateRoomView from "../CreateRoomView/CreateRoomView";

export type CreateRoomProps = {
  user: User;
};

const CreateRoom = ({ user }: CreateRoomProps): JSX.Element | null => {
  const router = useRouter();

  const { data: profile } = useSelectProfile({ userId: user.id });
  const { mutate: insertRoom } = useInsertRoom({
    onSuccess: (room) => router.push(`/room/${room.slug}`),
  });

  return profile ? (
    <CreateRoomView
      onSubmit={({ name }) =>
        insertRoom({
          author_id: profile?.id,
          name: name,
          slug: name.replace(/\s/g, "_"), // remove not [0-9][a-z][A-Z]
          data: { kind: "room#0.0.1" },
        })
      }
    />
  ) : null;
};

export default CreateRoom;
