import { Alert, Button, Input, Typography } from '@music-room/ui';
import { PostgrestError } from '@supabase/supabase-js';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { Profile } from '../../../../services/data/types';
import useText from '../../../../utils/translations/useText';
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
  const text = useText();

  const {
    formState: { errors, isDirty },
    register,
    handleSubmit,
  } = useForm<ProfileDetailsViewData>({
    defaultValues: { name: profile.name },
  });

  const options = useProfileDetailsViewOptions();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography>{text('profileHeader')}</Typography>
      <Input
        placeholder={text('profileNamePlaceholder')}
        {...register('name', options.name)}
      />
      {errors.name && <Alert severity="error">{errors.name.message}</Alert>}
      {error && <Alert severity="error">{error.message}</Alert>}
      <Button isLoading={isLoading} disabled={!isDirty} type="submit">
        {text('profileSaveButton')}
      </Button>
    </form>
  );
};
