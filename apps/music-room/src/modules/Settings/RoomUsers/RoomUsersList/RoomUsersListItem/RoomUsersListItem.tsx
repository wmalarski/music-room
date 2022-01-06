import { Member, RoleGuard, RoomRole } from '@music-room/data-access';
import { Button, Debug, Option, Select } from '@music-room/ui';
import { ChangeEvent, ReactElement } from 'react';
import { useText } from '../../../../../utils';

type Props = {
  member: Member;
  onRoleChange: (role: RoomRole) => void;
  onRemoveClick: () => void;
};

export const RoomUsersListItem = ({
  member,
  onRemoveClick,
  onRoleChange,
}: Props): ReactElement => {
  const text = useText();

  const handleRoleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onRoleChange(event.target.value as RoomRole);
  };

  return (
    <>
      <Debug value={member} />
      {member.room_author_id !== member.profile_id && (
        <RoleGuard visibleFor={['owner', 'mod']}>
          <Button onClick={onRemoveClick}>{text('removeFromRoom')}</Button>
          <Select value={member.role} onChange={handleRoleChange}>
            <Option value="mod">{text('modRole')}</Option>
            <Option value="user">{text('userRole')}</Option>
            <Option value="guest">{text('guestRole')}</Option>
          </Select>
        </RoleGuard>
      )}
    </>
  );
};
