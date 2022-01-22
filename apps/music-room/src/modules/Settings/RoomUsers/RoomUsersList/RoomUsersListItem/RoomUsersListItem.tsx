import { Member, RoomRole, useRoleGuard } from '@music-room/data-access';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Flex,
  Option,
  Select,
  Typography,
} from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import { ChangeEvent, ReactElement } from 'react';
import { RoomUsersRow } from '../RoomUsersRow/RoomUsersRow';

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
  const isMod = useRoleGuard({ mod: true, owner: true, default: false });
  const isDisabled = isCurrentUser || !isMod;

  return (
    <RoomUsersRow>
      <Typography size="sm" kind="description">
        {member.profile_id}
      </Typography>
      <Flex>
        <Avatar size="md">
          {member.profile_avatar && (
            <AvatarImage
              src={member.profile_avatar}
              alt={member.profile_name}
            />
          )}
          <AvatarFallback delayMs={member.profile_avatar ? 600 : 0}>
            {member.profile_name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </Flex>
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
    </RoomUsersRow>
  );
};
