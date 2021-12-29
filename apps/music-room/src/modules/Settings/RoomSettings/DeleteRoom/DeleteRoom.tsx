import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { useDeleteRoom } from '../../../../services/data/rooms/deleteRoom';
import { useRoom } from '../../../../utils/contexts/RoomContext';
import paths from '../../../../utils/routing/paths';
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
