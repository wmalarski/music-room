import {
  Member,
  RoomRole,
  useDeleteRole,
  useRoom,
  useSelectMembers,
  useUpdateRole,
} from '@music-room/data-access';
import { ReactElement, useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import { RoomUsersList } from './RoomUsersList/RoomUsersList';

type Props = {
  View?: typeof RoomUsersList;
};

export const RoomUsers = ({ View = RoomUsersList }: Props): ReactElement => {
  const { id } = useRoom();

  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState<string>('');

  const { data } = useSelectMembers({
    room_id: id,
    offset,
    limit: 30,
    query,
  });

  const { mutate: deleteRole } = useDeleteRole();

  const { mutate: updateRole } = useUpdateRole();

  const handleRemoveClick = (profile: Member) => {
    deleteRole({ id: profile.id });
  };

  const handleRoleChange = (profile: Member, role: RoomRole) => {
    updateRole({ id: profile.id, role });
  };

  const handleQueryChange = useDebounce((text: string) => {
    setQuery(text);
  }, 500);

  const handleOffsetChange = useDebounce((index: number) => {
    setOffset(index);
  }, 500);

  return (
    <View
      data={data}
      offset={offset}
      query={query}
      onOffsetChange={handleOffsetChange}
      onQueryChange={handleQueryChange}
      onRemoveClick={handleRemoveClick}
      onRoleChange={handleRoleChange}
    />
  );
};
