import { Link } from '@music-room/ui';
import { ReactNode } from 'react';
import paths from '../../../utils/routing/paths';
import useText from '../../../utils/translations/useText';

type Props = {
  right?: ReactNode;
};

export const NavigationView = ({ right }: Props): JSX.Element => {
  const text = useText();

  return (
    <div>
      <Link href={paths.home}>{text('navigationHome')}</Link>
      {right}
    </div>
  );
};
