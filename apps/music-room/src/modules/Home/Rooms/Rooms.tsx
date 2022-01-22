import { useSelectMembers, useUser } from '@music-room/data-access';
import { ReactElement, useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import { RoomsList } from './RoomsList/RoomsList';

type Props = {
  View?: typeof RoomsList;
};

const selectLimit = 50;

export const Rooms = ({ View = RoomsList }: Props): ReactElement => {
  const user = useUser();

  const [offset, setOffset] = useState(0);

  const { data } = useSelectMembers(
    {
      user_id: user.id,
      offset,
      limit: selectLimit,
    },
    {
      keepPreviousData: true,
    }
  );

  const handleOffsetChange = useDebounce((index: number) => {
    setOffset(index);
  }, 500);

  return (
    <View
      limit={selectLimit}
      data={data}
      offset={offset}
      onOffsetChange={handleOffsetChange}
    />
  );
};
