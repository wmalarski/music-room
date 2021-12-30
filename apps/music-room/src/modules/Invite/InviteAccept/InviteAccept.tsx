import {
  Profile,
  Room,
  SupabaseErrorCode,
  useInsertRole,
} from '@music-room/data-access';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { paths } from '../../../utils';
import { InviteAcceptView } from './InviteAcceptView/InviteAcceptView';

type Props = {
  room: Room;
  profile: Profile;
  View?: typeof InviteAcceptView;
};

export const InviteAccept = ({
  room,
  profile,
  View = InviteAcceptView,
}: Props): ReactElement => {
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
          role: 'user',
          room_id: room.id,
        })
      }
    />
  );
};
