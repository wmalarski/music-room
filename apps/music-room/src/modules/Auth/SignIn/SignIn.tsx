import { ComponentType, ReactElement } from 'react';
import { useSignIn } from '../../../services/auth/signIn';
import { SignInView, SignInViewProps } from './SignInView/SignInView';

type Props = {
  View?: ComponentType<SignInViewProps>;
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
