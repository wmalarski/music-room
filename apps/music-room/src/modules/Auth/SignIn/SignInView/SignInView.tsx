import { Button, Flex, Input, Typography } from '@music-room/ui';
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
      <Flex direction="column" gap="md">
        <Typography kind="description">{text('signInHeader')}</Typography>
        <Flex direction="column" gap="sm">
          <Typography>{text('emailPlaceholder')}</Typography>
          <Input
            placeholder={text('emailPlaceholder')}
            type="email"
            {...register('email', options.email)}
          />
          {errors.email && (
            <Typography kind="error" size="sm" role="alert">
              {errors.email.message}
            </Typography>
          )}
        </Flex>
        <Flex direction="column" gap="sm">
          <Typography>{text('passwordPlaceholder')}</Typography>
          <Input
            placeholder={text('passwordPlaceholder')}
            type="password"
            {...register('password', options.password)}
          />
          {errors.password && (
            <Typography kind="error" size="sm" role="alert">
              {errors.password.message}
            </Typography>
          )}
        </Flex>
        {error && (
          <Typography kind="error" size="sm" role="alert">
            {error.message}
          </Typography>
        )}
        <Button isLoading={isLoading} type="submit">
          <Typography size="sm">{text('signInButton')}</Typography>
        </Button>
      </Flex>
    </form>
  );
};
