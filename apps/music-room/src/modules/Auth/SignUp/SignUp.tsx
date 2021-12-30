import { useSignUp } from '@music-room/data-access';
import { ReactElement } from 'react';
import SignUpView from './SignUpView/SignUpView';

type Props = {
  View?: typeof SignUpView;
};

export const SignUp = ({ View = SignUpView }: Props): ReactElement => {
  const { data, mutate: signUp, error, isLoading } = useSignUp();

  return (
    <View
      error={error}
      isLoading={isLoading}
      user={data}
      onSubmit={(data) =>
        signUp({
          email: data.email,
          password: data.password,
        })
      }
    />
  );
};
