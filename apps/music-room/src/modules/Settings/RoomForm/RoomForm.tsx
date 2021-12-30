import { useRoom, useUpdateRoom } from '@music-room/data-access';
import { ReactElement } from 'react';
import { RoomFormView } from './RoomFormView/RoomFormView';

type Props = {
  View?: typeof RoomFormView;
};

export const RoomForm = ({ View = RoomFormView }: Props): ReactElement => {
  const { id, name } = useRoom();

  const { mutate: updateRoom, data, error, isLoading } = useUpdateRoom();

  return (
    <View
      error={error}
      isLoading={isLoading}
      roomName={data?.name ?? name}
      onSubmit={({ name }) => updateRoom({ id, name })}
    />
  );
};
