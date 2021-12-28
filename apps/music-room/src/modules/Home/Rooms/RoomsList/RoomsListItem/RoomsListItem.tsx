import { Debug, Link } from '@music-room/ui';
import { ReactElement } from 'react';
import { Member } from '../../../../../services/data/types';
import paths from '../../../../../utils/routing/paths';
import useText from '../../../../../utils/translations/useText';

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
