import { ReactElement } from 'react';
import { useUpdateRoom } from '../../../../services/data/rooms/updateRoom';
import { useMemberContext } from '../../../../utils/room/MemberContext';
import { RoomFormView } from './RoomFormView/RoomFormView';

type Props = {
  View?: typeof RoomFormView;
};

export const RoomForm = ({ View = RoomFormView }: Props): ReactElement => {
  const { room_id, room_name } = useMemberContext();

  const { mutate: updateRoom, data, error, isLoading } = useUpdateRoom();

  return (
    <View
      error={error}
      isLoading={isLoading}
      roomName={data?.name ?? room_name}
      onSubmit={({ name }) =>
        updateRoom({
          id: room_id,
          name,
        })
      }
    />
  );
};
