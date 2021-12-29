import { ReactElement } from 'react';
import { useRoom } from '../../../../utils/contexts/RoomContext';
import { RoomDetailsView } from './RoomDetailsView/RoomDetailsView';

type Props = {
  View?: typeof RoomDetailsView;
};

export const RoomDetails = ({
  View = RoomDetailsView,
}: Props): ReactElement => {
  const { name } = useRoom();

  return <View roomName={name} />;
};
