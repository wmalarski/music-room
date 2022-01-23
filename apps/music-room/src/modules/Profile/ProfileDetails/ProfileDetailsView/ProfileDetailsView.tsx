import { Profile } from '@music-room/data-access';
import {
  Button,
  Card,
  Form,
  FormError,
  FormFieldset,
  FormLabel,
  Input,
  Inset,
  Typography,
} from '@music-room/ui';
import { PostgrestError } from '@supabase/supabase-js';
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import {
  ProfileDetailsViewData,
  useProfileDetailsViewOptions,
} from './ProfileDetailsView.utils';

type Props = {
  isLoading: boolean;
  profile: Profile;
  error: PostgrestError | null;
  onSubmit: (data: ProfileDetailsViewData) => void;
};

export const ProfileDetailsView = ({
  profile,
  error,
  isLoading,
  onSubmit,
}: Props): ReactElement => {
  const { t } = useTranslation('profile');

  const {
    formState: { errors, isDirty },
    register,
    handleSubmit,
  } = useForm<ProfileDetailsViewData>({
    defaultValues: { name: profile.name },
  });

  const options = useProfileDetailsViewOptions();

  return (
    <Inset space="xl">
      <Card space="xl">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Typography size="xl">{t('profileHeader')}</Typography>
          <FormFieldset>
            <FormLabel htmlFor="name">{t('profileNamePlaceholder')}</FormLabel>
            <Input
              id="name"
              placeholder={t('profileNamePlaceholder')}
              {...register('name', options.name)}
            />
            {errors.name && (
              <FormError role="alert">{errors.name.message}</FormError>
            )}
          </FormFieldset>
          {error && <FormError role="alert">{error.message}</FormError>}
          <Button isLoading={isLoading} disabled={!isDirty} type="submit">
            <Typography size="sm">{t('profileSaveButton')}</Typography>
          </Button>
        </Form>
      </Card>
    </Inset>
  );
};
