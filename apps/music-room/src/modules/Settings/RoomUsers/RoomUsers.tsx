import {
  Member,
  RoomRole,
  useDeleteRole,
  useRoom,
  useSelectMembers,
  useUpdateRole,
} from '@music-room/data-access';
import { ReactElement, useState } from 'react';
import { RoomUsersList } from './RoomUsersList/RoomUsersList';

type Props = {
  View?: typeof RoomUsersList;
};

export const RoomUsers = ({ View = RoomUsersList }: Props): ReactElement => {
  const { id } = useRoom();

  const [offset, setOffset] = useState(0);

  const { data } = useSelectMembers({
    room_id: id,
    offset,
    limit: 30,
  });

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
      onPageChange={setOffset}
      onRemoveClick={handleRemoveClick}
      onRoleChange={handleRoleChange}
    />
  );
};
