import { Button } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';

type Props = {
  onSignOutClick: () => void;
};

export const SignOutView = ({ onSignOutClick }: Props): ReactElement => {
  const { t } = useTranslation('headers');

  return <Button onClick={onSignOutClick}>{t('signOutButton')}</Button>;
};
