import { useSelectMembers, useUser } from '@music-room/data-access';
import { ReactElement } from 'react';
import { useDebouncedState } from '../../../hooks/useDebouncedState';
import { RoomsList } from './RoomsList/RoomsList';

type Props = {
  View?: typeof RoomsList;
};

const selectLimit = 50;

export const Rooms = ({ View = RoomsList }: Props): ReactElement => {
  const user = useUser();

  const [offset, setOffset] = useDebouncedState(0, 500);

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

  return (
    <View
      limit={selectLimit}
      data={data}
      offset={offset}
      onOffsetChange={setOffset}
    />
  );
};
