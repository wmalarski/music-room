import { useRoom, useUpdateRoom } from '@music-room/data-access';
import { ReactElement } from 'react';
import { RoomFormView } from './RoomFormView/RoomFormView';
import { RoomFormViewData } from './RoomFormView/RoomFormView.utils';

type Props = {
  View?: typeof RoomFormView;
};

export const RoomForm = ({ View = RoomFormView }: Props): ReactElement => {
  const { id, name } = useRoom();

  const { mutate: updateRoom, data, error, isLoading } = useUpdateRoom();

  const handleSubmit = (data: RoomFormViewData) => {
    updateRoom({ id, name: data.name });
  };

  return (
    <View
      error={error}
      isLoading={isLoading}
      roomName={data?.name ?? name}
      onSubmit={handleSubmit}
    />
  );
};
