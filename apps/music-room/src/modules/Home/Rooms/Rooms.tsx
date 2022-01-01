import { useSelectMembers, useUser } from '@music-room/data-access';
import { ReactElement, useState } from 'react';
import { RoomsList } from './RoomsList/RoomsList';

type Props = {
  View?: typeof RoomsList;
};

export const Rooms = ({ View = RoomsList }: Props): ReactElement => {
  const user = useUser();

  const [offset, setOffset] = useState(0);

  const { data } = useSelectMembers({
    user_id: user.id,
    offset,
  });

  return <View data={data} offset={offset} onPageChange={setOffset} />;
};
