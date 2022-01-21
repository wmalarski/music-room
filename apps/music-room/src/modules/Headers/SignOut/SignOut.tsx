import { useSignOut } from '@music-room/data-access';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { paths } from '../../../utils';
import { SignOutView } from './SignOutView/SignOutView';

type Props = {
  View?: typeof SignOutView;
};

export const SignOut = ({ View = SignOutView }: Props): ReactElement => {
  const router = useRouter();

  const { mutate: signOut } = useSignOut({
    onSettled: () => {
      router.push(paths.home);
    },
  });

  return <View onSignOutClick={signOut} />;
};
