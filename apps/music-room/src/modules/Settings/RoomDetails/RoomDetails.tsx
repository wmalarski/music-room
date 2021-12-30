import { useRoom } from '@music-room/data-access';
import { Typography } from '@music-room/ui';
import { ReactElement } from 'react';

export const RoomDetails = (): ReactElement => {
  const { name } = useRoom();

  return <Typography>{name}</Typography>;
};
