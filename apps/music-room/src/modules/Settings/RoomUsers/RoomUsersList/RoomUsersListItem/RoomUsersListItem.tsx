import { Member, RoleGuard, RoomRole } from '@music-room/data-access';
import { Button, Debug, Option, Select } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import { ChangeEvent, ReactElement } from 'react';

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
  const { t } = useTranslation('settings');

  const handleRoleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onRoleChange(event.target.value as RoomRole);
  };

  return (
    <>
      <Debug value={member} />
      {member.room_author_id !== member.profile_id && (
        <RoleGuard visibleFor={['owner', 'mod']}>
          <Button onClick={onRemoveClick}>{t('removeFromRoom')}</Button>
          <Select value={member.role} onChange={handleRoleChange}>
            <Option value="mod">{t('modRole')}</Option>
            <Option value="user">{t('userRole')}</Option>
            <Option value="guest">{t('guestRole')}</Option>
          </Select>
        </RoleGuard>
      )}
    </>
  );
};
