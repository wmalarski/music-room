import { Member } from '@music-room/data-access';
import { ReactElement } from 'react';
import { RoomsListItem } from './RoomsListItem/RoomsListItem';

type Props = {
  members?: Member[];
};

export const RoomsList = ({ members }: Props): ReactElement => (
  <>
    {members?.map((member) => (
      <RoomsListItem key={member.room_id} member={member} />
    ))}
  </>
);
