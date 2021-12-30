import { Member } from '@music-room/data-access';
import { Debug, Link } from '@music-room/ui';
import { ReactElement } from 'react';
import { paths, useText } from '../../../../../utils';

type Props = {
  member: Member;
};

export const RoomsListItem = ({ member }: Props): ReactElement => {
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
