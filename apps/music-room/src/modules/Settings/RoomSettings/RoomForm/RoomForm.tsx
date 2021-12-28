import React from 'react';
import { useUpdateRoom } from '../../../../services/data/rooms/updateRoom';
import { useMemberContext } from '../../../../utils/room/MemberContext';
import RoomFormView, { RoomFormViewProps } from './RoomFormView/RoomFormView';

export type RoomDetailsProps = {
  View?: React.ComponentType<RoomFormViewProps>;
};

const RoomDetails = ({
  View = RoomFormView,
}: RoomDetailsProps): JSX.Element | null => {
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

export default RoomDetails;
