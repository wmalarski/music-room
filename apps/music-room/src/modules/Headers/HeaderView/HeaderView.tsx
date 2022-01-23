import { StyledLink, Typography } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';
import { paths } from '../../../utils';
import * as Styles from './HeaderView.styles';

type Props = {
  right?: ReactNode;
};

export const HeaderView = ({ right }: Props): ReactElement => {
  const { t } = useTranslation('headers');

  return (
    <Styles.Container
      direction="row"
      justifyContent="spaceBetween"
      alignItems="center"
      gap="md"
      spaceY="md"
      spaceX="lg"
    >
      <Typography size="xl">
        <Link href={paths.home} passHref>
          <StyledLink>{t('headerHome')}</StyledLink>
        </Link>
      </Typography>
      <div>{right}</div>
    </Styles.Container>
  );
};
