import { useSignUp } from '@music-room/data-access';
import { ReactElement } from 'react';
import SignUpView from './SignUpView/SignUpView';
import { SignUpViewData } from './SignUpView/SignUpView.utils';

type Props = {
  View?: typeof SignUpView;
};

export const SignUp = ({ View = SignUpView }: Props): ReactElement => {
  const { data, mutate: signUp, error, isLoading } = useSignUp();

  const handleSubmit = (data: SignUpViewData) => {
    signUp({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <View
      error={error}
      isLoading={isLoading}
      user={data}
      onSubmit={handleSubmit}
    />
  );
};
