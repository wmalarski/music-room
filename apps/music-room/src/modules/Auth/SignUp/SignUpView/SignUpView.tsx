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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography kind="description">{text('signUpHeader')}</Typography>
      <FormFieldset>
        <FormLabel htmlFor="email">{text('emailPlaceholder')}</FormLabel>
        <Input
          id="email"
          type="email"
          placeholder={text('emailPlaceholder')}
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
          type="password"
          placeholder={text('passwordPlaceholder')}
          {...register('password', options.password)}
        />
        {errors.password && (
          <FormError role="alert">{errors.password.message}</FormError>
        )}
      </FormFieldset>
      <FormFieldset>
        <FormLabel htmlFor="confirmPassword">
          {text('confirmPasswordPlaceholder')}
        </FormLabel>
        <Input
          id="confirmPassword"
          type="password"
          placeholder={text('confirmPasswordPlaceholder')}
          {...register('confirmPassword', options.confirmPassword)}
        />
        {errors.confirmPassword && (
          <FormError role="alert">{errors.confirmPassword.message}</FormError>
        )}
      </FormFieldset>
      {error && <FormError role="alert">{error.message}</FormError>}
      <Button isLoading={isLoading} type="submit">
        <Typography size="sm">{text('signUpButton')}</Typography>
      </Button>
    </Form>
  );
};

export default SignUpView;
