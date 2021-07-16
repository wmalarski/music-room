import React from "react";
import { useDeleteRole } from "../../../services/data/roles/deleteRole";
import { useUpdateRole } from "../../../services/data/roles/updateRole";
import { useSelectRoomProfiles } from "../../../services/data/roomProfiles/selectRoomProfiles";
import { useRoomContext } from "../../../utils/room/RoomContext";
import RoomUsersList from "../RoomUsersList/RoomUsersList";

const RoomUsers = (): JSX.Element => {
  const { room_id } = useRoomContext();

  const { data: profiles, fetchNextPage } = useSelectRoomProfiles({
    room_id,
  });

  const { mutate: deleteRole } = useDeleteRole();

  const { mutate: updateRole } = useUpdateRole();

  return (
    <RoomUsersList
      profiles={profiles?.pages.flat()}
      onLoadMore={() => fetchNextPage()}
      onRemoveClick={(profile) => deleteRole({ id: profile.role_id })}
      onRoleChange={(profile, role) =>
        updateRole({ id: profile.role_id, role })
      }
    />
  );
};

export default RoomUsers;
