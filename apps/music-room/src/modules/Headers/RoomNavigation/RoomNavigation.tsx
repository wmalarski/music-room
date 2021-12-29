import { ReactElement } from 'react';
import { useMemberContext } from '../../../utils/room/MemberContext';
import { RoomNavigationView } from './RoomNavigationView/RoomNavigationView';

type Props = {
  View?: typeof RoomNavigationView;
};

export const RoomNavigation = ({
  View = RoomNavigationView,
}: Props): ReactElement => {
  const { room_slug } = useMemberContext();

  return <View slug={room_slug} />;
};
