import { User } from '@supabase/supabase-js';
import { selectMembers } from '../data/members/selectMembers';
import { Member } from '../data/types';

export type GetServerSideMembersArgs = {
  slug?: string | string[];
  user: User;
};

export const getServerSideMembers = async ({
  slug,
  user,
}: GetServerSideMembersArgs): Promise<Member | null> => {
  const roomSlug = Array.isArray(slug) ? undefined : slug;
  if (!roomSlug) return null;

  const roles = await selectMembers({
    queryKey: [
      'members',
      {
        room_slug: roomSlug,
        user_id: user.id,
        offset: 0,
        limit: 1,
      },
    ],
    meta: {},
  });

  return roles.members?.[0] ?? null;
};
