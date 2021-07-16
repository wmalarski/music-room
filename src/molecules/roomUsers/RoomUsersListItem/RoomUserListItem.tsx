import React from "react";
import { RoomProfile, RoomRole } from "../../../services/data/types";
import RoleGuard from "../../../utils/room/RoleGuard";
import useText from "../../../utils/translations/useText";

export type RoomUsersListItemProps = {
  profile: RoomProfile;
  onRoleChange: (role: RoomRole) => void;
  onRemoveClick: () => void;
};

const RoomUsersListItem = ({
  profile,
  onRemoveClick,
  onRoleChange,
}: RoomUsersListItemProps): JSX.Element => {
  const text = useText();

  return (
    <>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
      {profile.author_id !== profile.profile_id && (
        <RoleGuard visibleFor={["owner", "mod"]}>
          <button onClick={onRemoveClick}>{text("removeFromRoom")}</button>
          <select
            value={profile.role}
            onChange={(event) => onRoleChange(event.target.value as RoomRole)}
          >
            <option value="mod">{text("modRole")}</option>
            <option value="user">{text("userRole")}</option>
            <option value="guest">{text("guestRole")}</option>
          </select>
        </RoleGuard>
      )}
    </>
  );
};

export default RoomUsersListItem;
