import { Alert, Button, Input, Typography } from '@music-room/ui';
import { PostgrestError, User } from '@supabase/supabase-js';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useText } from '../../../../utils';
import { SignInViewData, useSignInViewOptions } from './SignInView.utils';

type Props = {
  isLoading: boolean;
  error: PostgrestError | null;
  user?: User | null;
  onSubmit: (data: SignInViewData) => void;
};

export const SignInView = ({
  isLoading,
  error,
  onSubmit,
}: Props): ReactElement => {
  const text = useText();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInViewData>();

  const options = useSignInViewOptions();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography>{text('signInHeader')}</Typography>
      <Input
        placeholder={text('emailPlaceholder')}
        type="email"
        {...register('email', options.email)}
      />
      {errors.email && <Alert severity="error">{errors.email.message}</Alert>}
      <Input
        placeholder={text('passwordPlaceholder')}
        type="password"
        {...register('password', options.password)}
      />
      {errors.password && (
        <Alert severity="error">{errors.password.message}</Alert>
      )}
      {error && <Alert severity="error">{error.message}</Alert>}
      <Button isLoading={isLoading} type="submit">
        {text('signInButton')}
      </Button>
    </form>
  );
};
