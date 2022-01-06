import { Profile } from '@music-room/data-access';
import {
  Button,
  Form,
  FormError,
  FormFieldset,
  FormLabel,
  Input,
  Typography,
} from '@music-room/ui';
import { PostgrestError } from '@supabase/supabase-js';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useText } from '../../../../utils';
import * as Styles from './ProfileDetailsView.styles';
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
    <Styles.Container>
      <Styles.Content>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Typography size="xl">{text('profileHeader')}</Typography>
          <FormFieldset>
            <FormLabel htmlFor="name">
              {text('profileNamePlaceholder')}
            </FormLabel>
            <Input
              id="name"
              placeholder={text('profileNamePlaceholder')}
              {...register('name', options.name)}
            />
            {errors.name && (
              <FormError role="alert">{errors.name.message}</FormError>
            )}
          </FormFieldset>
          {error && <FormError role="alert">{error.message}</FormError>}
          <Button isLoading={isLoading} disabled={!isDirty} type="submit">
            <Typography size="sm">{text('profileSaveButton')}</Typography>
          </Button>
        </Form>
      </Styles.Content>
    </Styles.Container>
  );
};
