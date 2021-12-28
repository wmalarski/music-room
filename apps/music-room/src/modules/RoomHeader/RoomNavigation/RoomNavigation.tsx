import React from 'react';
import { useMemberContext } from '../../../utils/room/MemberContext';
import RoomNavigationView, {
  RoomNavigationViewProps,
} from './RoomNavigationView/RoomNavigationView';

export type RoomNavigationProps = {
  View?: React.ComponentType<RoomNavigationViewProps>;
};

const RoomNavigation = ({
  View = RoomNavigationView,
}: RoomNavigationProps): JSX.Element => {
  const { room_slug } = useMemberContext();

  return <View slug={room_slug} />;
};

export default RoomNavigation;
