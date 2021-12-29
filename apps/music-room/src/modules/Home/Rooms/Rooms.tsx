import { Member, useSelectMembers } from '@music-room/data-access';
import { ReactElement } from 'react';
import { useUser } from '../../../utils/contexts/UserContext';
import { RoomsList } from './RoomsList/RoomsList';

type Props = {
  View?: typeof RoomsList;
};

export const Rooms = ({ View = RoomsList }: Props): ReactElement => {
  const user = useUser();

  const { data: members } = useSelectMembers({ user_id: user.id });

  return (
    <View
      members={members?.pages.reduce<Member[]>(
        (prev, curr) => [...prev, ...curr],
        []
      )}
    />
  );
};
