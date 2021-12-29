import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { useSignOut } from '../../../services/auth/signOut';
import { SignOutView } from './SignOutView/SignOutView';

type Props = {
  View?: typeof SignOutView;
};

export const SignOut = ({ View = SignOutView }: Props): ReactElement => {
  const router = useRouter();

  const { mutate: signOut } = useSignOut({
    onSettled: () => router.push('/'),
  });

  return <View onSignOutClicked={signOut} />;
};
