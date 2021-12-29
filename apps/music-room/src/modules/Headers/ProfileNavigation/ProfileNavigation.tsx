import { Link } from '@music-room/ui';
import { ReactElement } from 'react';
import paths from '../../../utils/routing/paths';
import useText from '../../../utils/translations/useText';

export const ProfileNavigation = (): ReactElement => {
  const text = useText();

  return <Link href={paths.profile}>{text('navigationProfile')}</Link>;
};
