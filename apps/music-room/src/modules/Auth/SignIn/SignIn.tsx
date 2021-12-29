import { ReactElement } from 'react';
import { useSignIn } from '../../../../../../libs/data-access/src/auth/signIn';
import { SignInView } from './SignInView/SignInView';

type Props = {
  View?: typeof SignInView;
};

export const SignIn = ({ View = SignInView }: Props): ReactElement => {
  const { mutate: signUp, error, isLoading, data: user } = useSignIn();

  return (
    <View
      user={user}
      error={error}
      isLoading={isLoading}
      onSubmit={(data) =>
        signUp({
          email: data.email,
          password: data.password,
        })
      }
    />
  );
};
