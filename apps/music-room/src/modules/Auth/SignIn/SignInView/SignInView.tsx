import {
  Button,
  Form,
  FormError,
  FormFieldset,
  FormLabel,
  Input,
  Typography,
} from '@music-room/ui';
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography kind="description">{text('signInHeader')}</Typography>
      <FormFieldset>
        <FormLabel htmlFor="email">{text('emailPlaceholder')}</FormLabel>
        <Input
          id="email"
          placeholder={text('emailPlaceholder')}
          type="email"
          {...register('email', options.email)}
        />
        {errors.email && (
          <FormError role="alert">{errors.email.message}</FormError>
        )}
      </FormFieldset>
      <FormFieldset>
        <FormLabel htmlFor="password">{text('passwordPlaceholder')}</FormLabel>
        <Input
          id="password"
          placeholder={text('passwordPlaceholder')}
          type="password"
          {...register('password', options.password)}
        />
        {errors.password && (
          <FormError role="alert">{errors.password.message}</FormError>
        )}
      </FormFieldset>
      {error && <FormError role="alert">{error.message}</FormError>}
      <Button isLoading={isLoading} type="submit">
        <Typography size="sm">{text('signInButton')}</Typography>
      </Button>
    </Form>
  );
};
