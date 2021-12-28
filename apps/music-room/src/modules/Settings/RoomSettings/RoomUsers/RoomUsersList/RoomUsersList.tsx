import React from 'react';
import { Member, RoomRole } from '../../../../../services/data/types';
import useText from '../../../../../utils/translations/useText';
import { Button } from '../../../atoms';
import RoomUsersListItem from './RoomUsersListItem/RoomUsersListItem';

export type RoomUsersListProps = {
  members?: Member[];
  onLoadMore: () => void;
  onRoleChange: (profile: Member, role: RoomRole) => void;
  onRemoveClick: (profile: Member) => void;
};

const RoomUsersList = ({
  members,
  onLoadMore,
  onRoleChange,
  onRemoveClick,
}: RoomUsersListProps): JSX.Element => {
  const text = useText();

  return (
    <>
      {members?.map((member) => (
        <RoomUsersListItem
          key={member.profile_id}
          member={member}
          onRoleChange={(role) => onRoleChange(member, role)}
          onRemoveClick={() => onRemoveClick(member)}
        />
      ))}
      <Button onClick={onLoadMore}>{text('loadMoreUsers')}</Button>
    </>
  );
};

export default RoomUsersList;
