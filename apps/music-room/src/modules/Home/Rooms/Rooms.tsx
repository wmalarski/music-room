import { User } from '@supabase/supabase-js';
import { useSelectMembers } from '../../../services/data/members/selectMembers';
import { Member } from '../../../services/data/types';
import { RoomsList } from './RoomsList/RoomsList';

type Props = {
  user: User;
  View?: typeof RoomsList;
};

export const Rooms = ({ user, View = RoomsList }: Props): JSX.Element => {
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
