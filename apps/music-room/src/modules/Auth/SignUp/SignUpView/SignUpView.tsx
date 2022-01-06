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
  const { t } = useTranslation('auth');
  const { t: tForm } = useTranslation('common');

  const options = useSignUpViewOptions();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpViewData, SignUpViewContext>({
    resolver: signUpViewResolver,
    context: { t: tForm },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography kind="description">{t('signUpHeader')}</Typography>
      <FormFieldset>
        <FormLabel htmlFor="email">{t('emailPlaceholder')}</FormLabel>
        <Input
          id="email"
          type="email"
          placeholder={t('emailPlaceholder')}
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
          type="password"
          placeholder={t('passwordPlaceholder')}
          {...register('password', options.password)}
        />
        {errors.password && (
          <FormError role="alert">{errors.password.message}</FormError>
        )}
      </FormFieldset>
      <FormFieldset>
        <FormLabel htmlFor="confirmPassword">
          {t('confirmPasswordPlaceholder')}
        </FormLabel>
        <Input
          id="confirmPassword"
          type="password"
          placeholder={t('confirmPasswordPlaceholder')}
          {...register('confirmPassword', options.confirmPassword)}
        />
        {errors.confirmPassword && (
          <FormError role="alert">{errors.confirmPassword.message}</FormError>
        )}
      </FormFieldset>
      {error && <FormError role="alert">{error.message}</FormError>}
      <Button isLoading={isLoading} type="submit">
        <Typography size="sm">{t('signUpButton')}</Typography>
      </Button>
    </Form>
  );
};

export default SignUpView;
