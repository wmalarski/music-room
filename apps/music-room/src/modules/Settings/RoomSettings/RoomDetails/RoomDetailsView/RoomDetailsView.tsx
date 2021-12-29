import { Typography } from '@music-room/ui';
import { ReactElement } from 'react';

type Props = {
  roomName: string;
};

export const RoomDetailsView = ({ roomName }: Props): ReactElement | null => {
  return <Typography>{roomName}</Typography>;
};
