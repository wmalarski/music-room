import { Flex, StyledLink } from '@music-room/ui';
import Link from 'next/link';
import { ReactElement } from 'react';
import { paths, useText } from '../../../utils';
import { HeaderView } from '../HeaderView/HeaderView';
import { SignOut } from '../SignOut/SignOut';

export const ProfileHeader = (): ReactElement => {
  const text = useText();

  return (
    <HeaderView
      right={
        <Flex gap="md" alignItems="center">
          <Link href={paths.profile} passHref>
            <StyledLink>{text('navigationProfile')}</StyledLink>
          </Link>
          <SignOut />
        </Flex>
      }
    />
  );
};
