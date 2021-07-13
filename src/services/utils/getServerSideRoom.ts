import { User } from "@supabase/supabase-js";
import { selectRoomProfiles } from "../data/roomProfiles/selectRoomProfiles";
import { RoomProfile } from "../data/types";

export type GetServerSideRoomArgs = {
  slug?: string | string[];
  user: User;
};

const getServerSideRoom = async ({
  slug,
  user,
}: GetServerSideRoomArgs): Promise<RoomProfile | null> => {
  const roomSlug = Array.isArray(slug) ? undefined : slug;
  if (!roomSlug) return null;

  const roles = await selectRoomProfiles({
    queryKey: [
      "roomProfiles",
      {
        slug: roomSlug,
        user_id: user.id,
      },
    ],
  });

  return roles?.[0] ?? null;
};

export default getServerSideRoom;
