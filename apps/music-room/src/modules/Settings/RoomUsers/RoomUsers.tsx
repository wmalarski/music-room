import {
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
  });

  const { mutate: deleteRole } = useDeleteRole();

  const { mutate: updateRole } = useUpdateRole();

  return (
    <View
      data={data}
      offset={offset}
      onPageChange={setOffset}
      onRemoveClick={(profile) => deleteRole({ id: profile.id })}
      onRoleChange={(profile, role) => updateRole({ id: profile.id, role })}
    />
  );
};
