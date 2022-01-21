import { Member, RoomRole, useRoleGuard } from '@music-room/data-access';
import { Button, Option, Select, Typography } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import { ChangeEvent, ReactElement } from 'react';
import * as Styles from './RoomUsersListItem.styles';

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

  const isCurrentUser = member.room_author_id === member.profile_id;
  const isMod = useRoleGuard({ mod: false, owner: false, default: true });
  const isDisabled = isCurrentUser || !isMod;

  return (
    <Styles.Container>
      <Typography size="sm" kind="description">
        {member.profile_id}
      </Typography>
      <Typography>{member.profile_avatar}</Typography>
      <Typography>{member.profile_name}</Typography>
      <Select
        disabled={isDisabled}
        value={member.role}
        onChange={handleRoleChange}
      >
        <Option value="mod">{t('modRole')}</Option>
        <Option value="user">{t('userRole')}</Option>
        <Option value="guest">{t('guestRole')}</Option>
      </Select>
      <Button disabled={isDisabled} onClick={onRemoveClick}>
        <Typography size="sm">{t('removeFromRoom')}</Typography>
      </Button>
    </Styles.Container>
  );
};
