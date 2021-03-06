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

  const {
    mutate: deleteRoom,
    isLoading,
    error,
  } = useDeleteRoom(hash, {
    onSuccess: () => {
      router.push(paths.home);
    },
  });

  const handleClick = () => {
    deleteRoom({ id });
  };

  return <View isLoading={isLoading} onClick={handleClick} error={error} />;
};
