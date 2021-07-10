import React, { useMemo } from "react";
import ChatRoom from "../../molecules/chatRoom/ChatRoom/ChatRoom";
import Player from "../../molecules/player/Player/Player";
import { useSelectRoles } from "../../services/data/roles/selectRoles";

export type RoomContainerProps = {
  roomSlug: string;
  userId: string;
};

const RoomContainer = ({
  userId,
  roomSlug,
}: RoomContainerProps): JSX.Element => {
  const { data: roles } = useSelectRoles({ roomSlug, userId });

  const { profileId, roleTypes, roomId } = useMemo(
    () => ({
      roleTypes: roles?.map(({ role }) => role),
      roomId: roles?.[0].room_id.id,
      profileId: roles?.[0].profile_id.id,
    }),
    [roles]
  );

  return (
    <>
      {profileId && roleTypes && roomId && (
        <ChatRoom profileId={profileId} roles={roleTypes} roomId={roomId} />
      )}
      {roomId && <Player roomId={roomId} />}
    </>
  );
};

export default RoomContainer;
