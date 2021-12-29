import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { useDeleteRoom } from '../../../../services/data/rooms/deleteRoom';
import { useMemberContext } from '../../../../utils/room/MemberContext';
import paths from '../../../../utils/routing/paths';
import { DeleteRoomView } from './DeleteRoomView/DeleteRoomView';

type Props = {
  View?: typeof DeleteRoomView;
};

export const DeleteRoom = ({ View = DeleteRoomView }: Props): ReactElement => {
  const router = useRouter();

  const { room_id, room_hash } = useMemberContext();

  const { mutate: deleteRoom, isLoading } = useDeleteRoom(room_hash, {
    onSuccess: () => router.push(paths.home),
  });

  return (
    <View
      isLoading={isLoading}
      onClicked={() =>
        deleteRoom({
          id: room_id,
        })
      }
    />
  );
};
