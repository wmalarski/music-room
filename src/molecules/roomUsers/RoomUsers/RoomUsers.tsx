import React from "react";
import { useSelectMembers } from "../../../services/data/members/selectMembers";
import { useDeleteRole } from "../../../services/data/roles/deleteRole";
import { useUpdateRole } from "../../../services/data/roles/updateRole";
import { useMemberContext } from "../../../utils/room/MemberContext";
import RoomUsersList from "../RoomUsersList/RoomUsersList";

const RoomUsers = (): JSX.Element => {
  const { room_id } = useMemberContext();

  const { data: members, fetchNextPage } = useSelectMembers({
    room_id,
  });

  const { mutate: deleteRole } = useDeleteRole();

  const { mutate: updateRole } = useUpdateRole();

  return (
    <RoomUsersList
      members={members?.pages.flat()}
      onLoadMore={() => fetchNextPage()}
      onRemoveClick={(profile) => deleteRole({ id: profile.role_id })}
      onRoleChange={(profile, role) =>
        updateRole({ id: profile.role_id, role })
      }
    />
  );
};

export default RoomUsers;
