import React, { ReactElement } from 'react';
import { Member } from '../../../../services/data/types';
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
