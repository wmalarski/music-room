import { ReactElement } from 'react';
import { useSelectMembers } from '../../../services/data/members/selectMembers';
import { Member } from '../../../services/data/types';
import { useUser } from '../../../utils/auth/UserContext';
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
