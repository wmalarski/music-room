import { Flex, StyledLink } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { ReactElement } from 'react';
import { paths } from '../../../utils';
import { HeaderView } from '../HeaderView/HeaderView';
import { SignOut } from '../SignOut/SignOut';

export const ProfileHeader = (): ReactElement => {
  const { t } = useTranslation('headers');

  return (
    <HeaderView
      right={
        <Flex gap="md" alignItems="center">
          <Link href={paths.profile} passHref>
            <StyledLink>{t('navigationProfile')}</StyledLink>
          </Link>
          <SignOut />
        </Flex>
      }
    />
  );
};
