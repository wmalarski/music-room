import { Link } from '@music-room/ui';
import { ReactElement, ReactNode } from 'react';
import paths from '../../../utils/routing/paths';
import useText from '../../../utils/translations/useText';

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
