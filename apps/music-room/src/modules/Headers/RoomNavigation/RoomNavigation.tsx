import { useRoom } from '@music-room/data-access';
import { Link } from '@music-room/ui';
import { ReactElement } from 'react';
import { paths, useText } from '../../../utils';

export const RoomNavigation = (): ReactElement => {
  const { slug } = useRoom();

  const text = useText();

  return (
    <>
      <Link href={paths.room(slug)}>{text('navigationRoom')}</Link>
      <Link href={paths.roomSettings(slug)}>{text('navigationSettings')}</Link>
    </>
  );
};
