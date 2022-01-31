import {
  Profile,
  SupabaseErrorCode,
  useInsertRole,
  useRoom,
} from '@music-room/data-access';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { paths } from '../../../utils';
import { InviteAcceptView } from './InviteAcceptView/InviteAcceptView';

type Props = {
  profile: Profile;
  View?: typeof InviteAcceptView;
};

export const InviteAccept = ({
  profile,
  View = InviteAcceptView,
}: Props): ReactElement => {
  const room = useRoom();
  const router = useRouter();

  const {
    mutate: insertRole,
    isLoading,
    error,
  } = useInsertRole({
    onSuccess: () => {
      router.push(paths.room(room.slug));
    },
    onError: (error) => {
      if (error.code !== SupabaseErrorCode.UniquenessViolation) return;
      router.push(paths.room(room.slug));
    },
  });

  const handleAcceptClick = () => {
    insertRole({
      profile_id: profile.id,
      role: 'user',
      room_id: room.id,
    });
  };

  return (
    <View
      room={room}
      error={error}
      profile={profile}
      isLoading={isLoading}
      onAcceptClick={handleAcceptClick}
    />
  );
};
