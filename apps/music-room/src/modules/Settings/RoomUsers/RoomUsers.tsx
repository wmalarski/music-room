import {
  useDeleteRole,
  useRoom,
  useSelectMembers,
  useUpdateRole,
} from '@music-room/data-access';
import { ReactElement } from 'react';
import { RoomUsersList } from './RoomUsersList/RoomUsersList';

type Props = {
  View?: typeof RoomUsersList;
};

export const RoomUsers = ({ View = RoomUsersList }: Props): ReactElement => {
  const { id } = useRoom();

  const { data: members, fetchNextPage } = useSelectMembers({
    room_id: id,
  });

  const { mutate: deleteRole } = useDeleteRole();

  const { mutate: updateRole } = useUpdateRole();

  return (
    <View
      members={members?.pages.reduce((previous, current) => [
        ...previous,
        ...current,
      ])}
      onLoadMore={() => fetchNextPage()}
      onRemoveClick={(profile) => deleteRole({ id: profile.id })}
      onRoleChange={(profile, role) => updateRole({ id: profile.id, role })}
    />
  );
};
