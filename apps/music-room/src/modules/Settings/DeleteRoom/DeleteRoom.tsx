import { useDeleteRoom, useRoom } from '@music-room/data-access';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { paths } from '../../../utils';
import { DeleteRoomView } from './DeleteRoomView/DeleteRoomView';

type Props = {
  View?: typeof DeleteRoomView;
};

export const DeleteRoom = ({ View = DeleteRoomView }: Props): ReactElement => {
  const router = useRouter();

  const { id, hash } = useRoom();

  const { mutate: deleteRoom, isLoading } = useDeleteRoom(hash, {
    onSuccess: () => router.push(paths.home),
  });

  return <View isLoading={isLoading} onClicked={() => deleteRoom({ id })} />;
};
