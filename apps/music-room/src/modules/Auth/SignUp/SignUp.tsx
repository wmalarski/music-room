import { ReactElement } from 'react';
import { useSignUp } from '../../../services/auth/signUp';
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
