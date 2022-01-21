import {
  useInsertRoom,
  useSelectProfile,
  useUser,
} from '@music-room/data-access';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { paths } from '../../../utils';
import { CreateRoomView } from './CreateRoomView/CreateRoomView';
import { CreateRoomViewData } from './CreateRoomView/CreateRoomView.utils';

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

  const handleSubmit = (data: CreateRoomViewData) => {
    if (!profile) return;
    insertRoom({
      author_id: profile?.id,
      name: data.name,
      slug: data.slug,
      data: { kind: 'room#0.0.1' },
    });
  };

  return (
    <View
      isLoading={isLoading}
      error={error}
      profile={profile}
      onSubmit={handleSubmit}
    />
  );
};
