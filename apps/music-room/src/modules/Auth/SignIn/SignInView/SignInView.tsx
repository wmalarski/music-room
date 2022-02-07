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
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useErrorMessage } from '../../../../hooks/useErrorMessage';
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
  const { t } = useTranslation('auth');

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInViewData>();

  const options = useSignInViewOptions();
  const errorMessage = useErrorMessage({ error });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography kind="description">{t('signInHeader')}</Typography>
      <FormFieldset>
        <FormLabel htmlFor="email">{t('emailPlaceholder')}</FormLabel>
        <Input
          id="email"
          placeholder={t('emailPlaceholder')}
          type="email"
          {...register('email', options.email)}
        />
        {errors.email && (
          <FormError role="alert">{errors.email.message}</FormError>
        )}
      </FormFieldset>
      <FormFieldset>
        <FormLabel htmlFor="password">{t('passwordPlaceholder')}</FormLabel>
        <Input
          id="password"
          placeholder={t('passwordPlaceholder')}
          type="password"
          {...register('password', options.password)}
        />
        {errors.password && (
          <FormError role="alert">{errors.password.message}</FormError>
        )}
      </FormFieldset>
      {error && <FormError role="alert">{errorMessage}</FormError>}
      <Button isLoading={isLoading} type="submit" name="signIn">
        <Typography size="sm">{t('signInButton')}</Typography>
      </Button>
    </Form>
  );
};
