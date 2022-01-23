import { Typography } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import { RoomUsersRow } from '../RoomUsersRow/RoomUsersRow';

export const RoomUsersListHeader = (): ReactElement => {
  const { t } = useTranslation('settings');

  return (
    <RoomUsersRow>
      <Typography size="sm" kind="description">
        {t('profileId')}
      </Typography>
      <Typography size="sm" kind="description">
        {t('profileAvatar')}
      </Typography>
      <Typography size="sm" kind="description">
        {t('profileName')}
      </Typography>
      <Typography size="sm" kind="description">
        {t('profileRole')}
      </Typography>
      <Typography size="sm" kind="description">
        {t('profileRemove')}
      </Typography>
    </RoomUsersRow>
  );
};
