import { Button } from '@music-room/ui';
import { ReactElement } from 'react';
import useText from '../../../../utils/translations/useText';

type Props = {
  onSignOutClicked: () => void;
};

export const SignOutView = ({ onSignOutClicked }: Props): ReactElement => {
  const text = useText();

  return <Button onClick={onSignOutClicked}>{text('signOutButton')}</Button>;
};
