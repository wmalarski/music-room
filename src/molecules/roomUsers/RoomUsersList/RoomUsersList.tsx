import React from "react";
import { Button } from "../../../atoms";
import { RoomProfile, RoomRole } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";
import RoomUsersListItem from "../RoomUsersListItem/RoomUserListItem";

export type RoomUsersListProps = {
  profiles?: RoomProfile[];
  onLoadMore: () => void;
  onRoleChange: (profile: RoomProfile, role: RoomRole) => void;
  onRemoveClick: (profile: RoomProfile) => void;
};

const RoomUsersList = ({
  profiles,
  onLoadMore,
  onRoleChange,
  onRemoveClick,
}: RoomUsersListProps): JSX.Element => {
  const text = useText();

  return (
    <>
      {profiles?.map((profile) => (
        <RoomUsersListItem
          key={profile.profile_id}
          profile={profile}
          onRoleChange={(role) => onRoleChange(profile, role)}
          onRemoveClick={() => onRemoveClick(profile)}
        />
      ))}
      <Button onClick={onLoadMore}>{text("loadMoreUsers")}</Button>
    </>
  );
};

export default RoomUsersList;
