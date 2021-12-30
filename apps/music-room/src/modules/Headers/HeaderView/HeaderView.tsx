import { Link } from '@music-room/ui';
import { ReactElement, ReactNode } from 'react';
import { paths, useText } from '../../../utils';

type Props = {
  right?: ReactNode;
};

export const HeaderView = ({ right }: Props): ReactElement => {
  const text = useText();

  return (
    <div>
      <Link href={paths.home}>{text('navigationHome')}</Link>
      {right}
    </div>
  );
};
