import { Member, RoomRole } from '@music-room/data-access';
import { Button } from '@music-room/ui';
import { ReactElement } from 'react';
import useText from '../../../../utils/translations/useText';
import { RoomUsersListItem } from './RoomUsersListItem/RoomUsersListItem';

type Props = {
  members?: Member[];
  onLoadMore: () => void;
  onRoleChange: (profile: Member, role: RoomRole) => void;
  onRemoveClick: (profile: Member) => void;
};

export const RoomUsersList = ({
  members,
  onLoadMore,
  onRoleChange,
  onRemoveClick,
}: Props): ReactElement => {
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
