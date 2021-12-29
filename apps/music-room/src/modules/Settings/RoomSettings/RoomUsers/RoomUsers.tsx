import { ReactElement } from 'react';
import { useSelectMembers } from '../../../../services/data/members/selectMembers';
import { useDeleteRole } from '../../../../services/data/roles/deleteRole';
import { useUpdateRole } from '../../../../services/data/roles/updateRole';
import { useMemberContext } from '../../../../utils/room/MemberContext';
import { RoomUsersList } from './RoomUsersList/RoomUsersList';

type Props = {
  View?: typeof RoomUsersList;
};

export const RoomUsers = ({ View = RoomUsersList }: Props): ReactElement => {
  const { room_id } = useMemberContext();

  const { data: members, fetchNextPage } = useSelectMembers({
    room_id,
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
