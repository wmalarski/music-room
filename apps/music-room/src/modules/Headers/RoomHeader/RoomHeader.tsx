import { useRoom } from '@music-room/data-access';
import { Flex, StyledLink } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { ReactElement } from 'react';
import { paths } from '../../../utils';
import { HeaderView } from '../HeaderView/HeaderView';
import { SignOut } from '../SignOut/SignOut';

export const RoomHeader = (): ReactElement => {
  const { t } = useTranslation('headers');

  const { slug } = useRoom();

  return (
    <HeaderView
      right={
        <Flex gap="md" alignItems="center">
          <Link href={paths.room(slug)} passHref>
            <StyledLink>{t('navigationRoom')}</StyledLink>
          </Link>
          <Link href={paths.roomSettings(slug)} passHref>
            <StyledLink>{t('navigationSettings')}</StyledLink>
          </Link>
          <Link href={paths.profile} passHref>
            <StyledLink>{t('navigationProfile')}</StyledLink>
          </Link>
          <SignOut />
        </Flex>
      }
    />
  );
};
