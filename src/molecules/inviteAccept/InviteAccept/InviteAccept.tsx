import { useRouter } from "next/router";
import React from "react";
import { useInsertRole } from "../../../services/data/roles/insertRole";
import { Profile, Room } from "../../../services/data/types";
import { SupabaseErrorCode } from "../../../services/supabase";
import InviteAcceptForm from "../InviteAcceptForm/InviteAcceptForm";

export type InviteAcceptProps = {
  room: Room;
  profile: Profile;
};

const InviteAccept = ({ room, profile }: InviteAcceptProps): JSX.Element => {
  const router = useRouter();

  const { mutate: insertRole } = useInsertRole({
    onSuccess: () => router.push(`/room/${room.slug}`),
    onError: (error) => {
      if (error.code !== SupabaseErrorCode.UniquenessViolation) return;
      router.push(`/room/${room.slug}`);
    },
  });

  return (
    <InviteAcceptForm
      room={room}
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
