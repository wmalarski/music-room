import React from "react";
import { RoomProfile, RoomRole } from "../../../services/data/types";
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
      <button onClick={onLoadMore}>Load more</button>
    </>
  );
};

export default RoomUsersList;
