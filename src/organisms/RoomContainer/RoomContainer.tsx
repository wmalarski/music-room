import { useMemo } from "react";
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
    <div>
      {JSON.stringify(
        { profileId, roleTypes, roomId, roomSlug, userId },
        null,
        2
      )}
    </div>
  );
};

export default RoomContainer;
