import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { useSignOut } from '../../../services/auth/signOut';
import paths from '../../../utils/routing/paths';
import { SignOutView } from './SignOutView/SignOutView';

type Props = {
  View?: typeof SignOutView;
};

export const SignOut = ({ View = SignOutView }: Props): ReactElement => {
  const router = useRouter();

  const { mutate: signOut } = useSignOut({
    onSettled: () => router.push(paths.home),
  });

  return <View onSignOutClicked={signOut} />;
};
