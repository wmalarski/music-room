import { Button, Flex, Input, Typography } from '@music-room/ui';
import { PostgrestError, User } from '@supabase/supabase-js';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useText } from '../../../../utils';
import {
  SignUpViewContext,
  SignUpViewData,
  signUpViewResolver,
  useSignUpViewOptions,
} from './SignUpView.utils';

type Props = {
  isLoading: boolean;
  error: PostgrestError | null;
  user?: User | null;
  onSubmit: (data: SignUpViewData) => void;
};

const SignUpView = ({ isLoading, error, onSubmit }: Props): ReactElement => {
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
      <Flex direction="column" gap="md">
        <Typography kind="description">{text('signUpHeader')}</Typography>
        <Flex direction="column" gap="sm">
          <Typography>{text('emailPlaceholder')}</Typography>
          <Input
            type="email"
            placeholder={text('emailPlaceholder')}
            {...register('email', options.email)}
          />
          {errors.email && (
            <Typography kind="error" size="sm">
              {errors.email.message}
            </Typography>
          )}
        </Flex>
        <Flex direction="column" gap="sm">
          <Typography>{text('passwordPlaceholder')}</Typography>
          <Input
            type="password"
            placeholder={text('passwordPlaceholder')}
            {...register('password', options.password)}
          />
          {errors.password && (
            <Typography kind="error" size="sm">
              {errors.password.message}
            </Typography>
          )}
        </Flex>
        <Flex direction="column" gap="sm">
          <Typography>{text('confirmPasswordPlaceholder')}</Typography>
          <Input
            type="password"
            placeholder={text('confirmPasswordPlaceholder')}
            {...register('confirmPassword', options.confirmPassword)}
          />
          {errors.confirmPassword && (
            <Typography kind="error">
              {errors.confirmPassword.message}
            </Typography>
          )}
        </Flex>
        {error && (
          <Typography kind="error" size="sm">
            {error.message}
          </Typography>
        )}
        <Button isLoading={isLoading} type="submit">
          <Typography size="sm">{text('signUpButton')}</Typography>
        </Button>
      </Flex>
    </form>
  );
};

export default SignUpView;
