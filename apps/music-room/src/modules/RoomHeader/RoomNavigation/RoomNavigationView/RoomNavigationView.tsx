import React from 'react';
import paths from '../../../../utils/routing/paths';
import useText from '../../../../utils/translations/useText';
import { Link } from '../../../atoms';

export type RoomNavigationViewProps = {
  slug: string;
};

const RoomNavigationView = ({ slug }: RoomNavigationViewProps): JSX.Element => {
  const text = useText();

  return (
    <>
      <Link href={paths.room(slug)}>{text('navigationRoom')}</Link>
      <Link href={paths.roomSettings(slug)}>{text('navigationSettings')}</Link>
    </>
  );
};

export default RoomNavigationView;
