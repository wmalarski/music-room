import React from 'react';
import { useMemberContext } from '../../../../utils/room/MemberContext';
import RoomDetailsView, {
  RoomDetailsViewProps,
} from './RoomDetailsView/RoomDetailsView';

export type RoomDetailsProps = {
  View?: React.ComponentType<RoomDetailsViewProps>;
};

const RoomDetails = ({
  View = RoomDetailsView,
}: RoomDetailsProps): JSX.Element | null => {
  const { room_name } = useMemberContext();

  return <View roomName={room_name} />;
};

export default RoomDetails;
