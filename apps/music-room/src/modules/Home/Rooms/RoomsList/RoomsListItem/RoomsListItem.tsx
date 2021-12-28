import React from 'react';
import { Member } from '../../../../../services/data/types';
import paths from '../../../../../utils/routing/paths';
import useText from '../../../../../utils/translations/useText';
import { Debug, Link } from '../../../atoms';

export type RoomsListItemProps = {
  member: Member;
};

const RoomsListItem = ({ member }: RoomsListItemProps): JSX.Element => {
  const text = useText();

  return (
    <>
      <Debug value={member} />
      <Link href={paths.room(member.room_slug)}>
        {text('roomLink')(member.room_name)}
      </Link>
    </>
  );
};

export default RoomsListItem;