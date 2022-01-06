import { Button } from '@music-room/ui';
import { ReactElement } from 'react';
import { useText } from '../../../../utils';

type Props = {
  onSignOutClick: () => void;
};

export const SignOutView = ({ onSignOutClick }: Props): ReactElement => {
  const text = useText();

  return <Button onClick={onSignOutClick}>{text('signOutButton')}</Button>;
};
