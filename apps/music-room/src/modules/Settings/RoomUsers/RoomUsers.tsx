import {
  Member,
  RoomRole,
  useDeleteRole,
  useRoom,
  useSelectMembers,
  useUpdateRole,
} from '@music-room/data-access';
import { ReactElement } from 'react';
import { useDebouncedState } from '../../../hooks/useDebouncedState';
import { RoomUsersList } from './RoomUsersList/RoomUsersList';

type Props = {
  View?: typeof RoomUsersList;
};

const selectLimit = 40;

export const RoomUsers = ({ View = RoomUsersList }: Props): ReactElement => {
  const { id } = useRoom();

  const [offset, setOffset] = useDebouncedState(0, 500);
  const [query, setQuery] = useDebouncedState('', 500);

  const { data } = useSelectMembers(
    {
      room_id: id,
      offset,
      limit: selectLimit,
      query,
    },
    {
      keepPreviousData: true,
    }
  );

  const { mutate: deleteRole } = useDeleteRole();

  const { mutate: updateRole } = useUpdateRole();

  const handleRemoveClick = (profile: Member) => {
    deleteRole({ id: profile.id });
  };

  const handleRoleChange = (profile: Member, role: RoomRole) => {
    updateRole({ id: profile.id, role });
  };

  return (
    <View
      data={data}
      offset={offset}
      query={query}
      limit={selectLimit}
      onOffsetChange={setOffset}
      onQueryChange={setQuery}
      onRemoveClick={handleRemoveClick}
      onRoleChange={handleRoleChange}
    />
  );
};
