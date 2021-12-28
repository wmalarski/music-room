import { Alert, Button, Debug, Input, Typography } from '@music-room/ui';
import { PostgrestError, User } from '@supabase/supabase-js';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import useText from '../../../../utils/translations/useText';
import {
  SignUpViewContext,
  SignUpViewData,
  signUpViewResolver,
  useSignUpViewOptions,
} from './SignUpView.utils';

export type SignUpViewProps = {
  isLoading: boolean;
  error: PostgrestError | null;
  user?: User | null;
  onSubmit: (data: SignUpViewData) => void;
};

const SignUpView = ({
  isLoading,
  error,
  user,
  onSubmit,
}: SignUpViewProps): ReactElement => {
  const text = useText();

  const options = useSignUpViewOptions();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpViewData, SignUpViewContext>({
    resolver: signUpViewResolver,
    context: { text },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography>{text('signUpHeader')}</Typography>
      <Input
        type="email"
        placeholder={text('emailPlaceholder')}
        {...register('email', options.email)}
      />
      {errors.email && <Alert severity="error">{errors.email.message}</Alert>}
      <Input
        type="password"
        placeholder={text('passwordPlaceholder')}
        {...register('password', options.password)}
      />
      {errors.password && (
        <Alert severity="error">{errors.password.message}</Alert>
      )}
      <Input
        type="password"
        placeholder={text('confirmPasswordPlaceholder')}
        {...register('confirmPassword', options.confirmPassword)}
      />
      {errors.confirmPassword && (
        <Alert severity="error">{errors.confirmPassword.message}</Alert>
      )}
      {error && <Alert severity="error">{error.message}</Alert>}
      <Button isLoading={isLoading} type="submit">
        {text('signUpButton')}
      </Button>
      <Debug value={user} />
    </form>
  );
};

export default SignUpView;
