import { ReactElement } from 'react';
import { useRoom } from '../../../utils/contexts/RoomContext';
import { RoomNavigationView } from './RoomNavigationView/RoomNavigationView';

type Props = {
  View?: typeof RoomNavigationView;
};

export const RoomNavigation = ({
  View = RoomNavigationView,
}: Props): ReactElement => {
  const { slug } = useRoom();

  return <View slug={slug} />;
};
