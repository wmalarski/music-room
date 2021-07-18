import React from "react";
import { Button, Debug, Option, Select } from "../../../atoms";
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
      <Debug value={profile} />
      {profile.author_id !== profile.profile_id && (
        <RoleGuard visibleFor={["owner", "mod"]}>
          <Button onClick={onRemoveClick}>{text("removeFromRoom")}</Button>
          <Select
            value={profile.role}
            onChange={(event) => onRoleChange(event.target.value as RoomRole)}
          >
            <Option value="mod">{text("modRole")}</Option>
            <Option value="user">{text("userRole")}</Option>
            <Option value="guest">{text("guestRole")}</Option>
          </Select>
        </RoleGuard>
      )}
    </>
  );
};

export default RoomUsersListItem;
