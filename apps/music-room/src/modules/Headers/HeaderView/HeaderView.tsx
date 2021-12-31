import { StyledLink, Typography } from '@music-room/ui';
import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';
import { paths, useText } from '../../../utils';
import * as Styles from './HeaderView.styles';

type Props = {
  right?: ReactNode;
};

export const HeaderView = ({ right }: Props): ReactElement => {
  const text = useText();

  return (
    <Styles.Container
      direction="row"
      justifyContent="spaceBetween"
      alignItems="center"
    >
      <Typography size="xl">
        <Link href={paths.home} passHref>
          <StyledLink>{text('headerHome')}</StyledLink>
        </Link>
      </Typography>
      <div>{right}</div>
    </Styles.Container>
  );
};
