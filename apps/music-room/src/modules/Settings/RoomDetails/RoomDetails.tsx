import { Typography } from '@music-room/ui';
import { ReactElement } from 'react';
import { useRoom } from '../../../utils/contexts/RoomContext';

export const RoomDetails = (): ReactElement => {
  const { name } = useRoom();

  return <Typography>{name}</Typography>;
};
