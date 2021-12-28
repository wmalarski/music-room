import { useRouter } from "next/router";
import React from "react";
import { useInsertRole } from "../../../services/data/roles/insertRole";
import { Profile, Room } from "../../../services/data/types";
import { SupabaseErrorCode } from "../../../services/supabase";
import paths from "../../../utils/routing/paths";
import InviteAcceptView, {
  InviteAcceptViewProps,
} from "../InviteAcceptView/InviteAcceptView";

export type InviteAcceptProps = {
  room: Room;
  profile: Profile;
  View?: React.ComponentType<InviteAcceptViewProps>;
};

const InviteAccept = ({
  room,
  profile,
  View = InviteAcceptView,
}: InviteAcceptProps): JSX.Element => {
  const router = useRouter();

  const { mutate: insertRole, isLoading } = useInsertRole({
    onSuccess: () => router.push(paths.room(room.slug)),
    onError: (error) => {
      if (error.code !== SupabaseErrorCode.UniquenessViolation) return;
      router.push(paths.room(room.slug));
    },
  });

  return (
    <View
      room={room}
      isLoading={isLoading}
      onAcceptClicked={() =>
        insertRole({
          profile_id: profile.id,
          role: "user",
          room_id: room.id,
        })
      }
    />
  );
};

export default InviteAccept;
