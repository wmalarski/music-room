import { Link } from '@music-room/ui';
import { ReactElement } from 'react';
import { paths, useText } from '../../../utils';

export const ProfileNavigation = (): ReactElement => {
  const text = useText();

  return <Link href={paths.profile}>{text('navigationProfile')}</Link>;
};
