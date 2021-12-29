import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { useSelectProfile } from '../../../services/data/profiles/selectProfile';
import { useInsertRoom } from '../../../services/data/rooms/insertRoom';
import { useUser } from '../../../utils/auth/UserContext';
import paths from '../../../utils/routing/paths';
import { CreateRoomView } from './CreateRoomView/CreateRoomView';

type Props = {
  View?: typeof CreateRoomView;
};

export const CreateRoom = ({ View = CreateRoomView }: Props): ReactElement => {
  const router = useRouter();
  const user = useUser();

  const {
    data: profile = null,
    error,
    isLoading,
  } = useSelectProfile({ userId: user.id });

  const { mutate: insertRoom } = useInsertRoom({
    onSuccess: (room) => router.push(paths.room(room.slug)),
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
          data: { kind: 'room#0.0.1' },
        })
      }
    />
  );
};
