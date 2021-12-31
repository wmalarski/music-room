import { useRoom } from '@music-room/data-access';
import { Flex, StyledLink } from '@music-room/ui';
import Link from 'next/link';
import { ReactElement } from 'react';
import { paths, useText } from '../../../utils';
import { HeaderView } from '../HeaderView/HeaderView';
import { SignOut } from '../SignOut/SignOut';

export const RoomHeader = (): ReactElement => {
  const text = useText();

  const { slug } = useRoom();

  return (
    <HeaderView
      right={
        <Flex gap="md" alignItems="center">
          <Link href={paths.room(slug)} passHref>
            <StyledLink>{text('navigationRoom')}</StyledLink>
          </Link>
          <Link href={paths.roomSettings(slug)} passHref>
            <StyledLink>{text('navigationSettings')}</StyledLink>
          </Link>
          <Link href={paths.profile} passHref>
            <StyledLink>{text('navigationProfile')}</StyledLink>
          </Link>
          <SignOut />
        </Flex>
      }
    />
  );
};
