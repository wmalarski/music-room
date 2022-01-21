import { useSignIn } from '@music-room/data-access';
import { ReactElement } from 'react';
import { SignInView } from './SignInView/SignInView';
import { SignInViewData } from './SignInView/SignInView.utils';

type Props = {
  View?: typeof SignInView;
};

export const SignIn = ({ View = SignInView }: Props): ReactElement => {
  const { mutate: signUp, error, isLoading, data: user } = useSignIn();

  const handleSubmit = (data: SignInViewData) => {
    signUp({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <View
      user={user}
      error={error}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  );
};
