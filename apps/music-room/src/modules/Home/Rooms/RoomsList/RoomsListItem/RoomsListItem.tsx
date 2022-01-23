import { Member } from '@music-room/data-access';
import { CircleLink, SkeletonBox, TooltipText } from '@music-room/ui';
import { RocketIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { ReactElement } from 'react';
import { paths } from '../../../../../utils';

type Props = {
  member?: Member;
};

export const RoomsListItem = ({ member }: Props): ReactElement => {
  if (!member) return <SkeletonBox height="xl" />;

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
