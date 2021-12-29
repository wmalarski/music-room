import { ReactElement } from 'react';
import { useUpdateRoom } from '../../../services/data/rooms/updateRoom';
import { useRoom } from '../../../utils/contexts/RoomContext';
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
