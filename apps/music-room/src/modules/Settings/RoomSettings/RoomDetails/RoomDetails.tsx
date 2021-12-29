import { ReactElement } from 'react';
import { useMemberContext } from '../../../../utils/room/MemberContext';
import { RoomDetailsView } from './RoomDetailsView/RoomDetailsView';

type Props = {
  View?: typeof RoomDetailsView;
};

export const RoomDetails = ({
  View = RoomDetailsView,
}: Props): ReactElement => {
  const { room_name } = useMemberContext();

  return <View roomName={room_name} />;
};
