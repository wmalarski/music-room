import { Member } from '@music-room/data-access';
import { CircleLink, TooltipText } from '@music-room/ui';
import { RocketIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { ReactElement } from 'react';
import { paths } from '../../../../../utils';

type Props = {
  member: Member;
};

export const RoomsListItem = ({ member }: Props): ReactElement => {
  return (
    <Link href={paths.room(member.room_slug)} passHref>
      <CircleLink>
        <TooltipText
          text={member.room_name}
          side="right"
          asChild
          sideOffset={5}
        >
          <RocketIcon />
        </TooltipText>
      </CircleLink>
    </Link>
  );
};
