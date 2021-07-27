import { User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import React from "react";
import { useSelectProfile } from "../../../services/data/profiles/selectProfile";
import { useInsertRoom } from "../../../services/data/rooms/insertRoom";
import CreateRoomView, {
  CreateRoomViewProps,
} from "../CreateRoomView/CreateRoomView";

export type CreateRoomProps = {
  user: User;
  View?: React.ComponentType<CreateRoomViewProps>;
};

const CreateRoom = ({
  user,
  View = CreateRoomView,
}: CreateRoomProps): JSX.Element | null => {
  const router = useRouter();

  const {
    data: profile = null,
    error,
    isLoading,
  } = useSelectProfile({ userId: user.id });

  const { mutate: insertRoom } = useInsertRoom({
    onSuccess: (room) => router.push(`/room/${room.slug}`),
  });

  return (
    <View
      isLoading={isLoading}
      error={error}
      profile={profile}
      onSubmit={({ name, slug }) =>
        profile &&
        insertRoom({
          author_id: profile?.id,
          name,
          slug,
          data: { kind: "room#0.0.1" },
        })
      }
    />
  );
};

export default CreateRoom;
