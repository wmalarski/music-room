import React from "react";
import { Button, Debug, Option, Select } from "../../../atoms";
import { Member, RoomRole } from "../../../services/data/types";
import RoleGuard from "../../../utils/room/RoleGuard";
import useText from "../../../utils/translations/useText";

export type RoomUsersListItemProps = {
  member: Member;
  onRoleChange: (role: RoomRole) => void;
  onRemoveClick: () => void;
};

const RoomUsersListItem = ({
  member,
  onRemoveClick,
  onRoleChange,
}: RoomUsersListItemProps): JSX.Element => {
  const text = useText();

  return (
    <>
      <Debug value={member} />
      {member.room_author_id !== member.profile_id && (
        <RoleGuard visibleFor={["owner", "mod"]}>
          <Button onClick={onRemoveClick}>{text("removeFromRoom")}</Button>
          <Select
            value={member.role}
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
