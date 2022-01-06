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
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { RoomFormViewData, useRoomFormViewOptions } from './RoomFormView.utils';

type Props = {
  isLoading: boolean;
  roomName: string;
  error: PostgrestError | null;
  onSubmit: (data: RoomFormViewData) => void;
};

export const RoomFormView = ({
  isLoading,
  roomName,
  error,
  onSubmit,
}: Props): ReactElement => {
  const { t } = useTranslation('settings');

  const {
    formState: { errors, isDirty },
    register,
    handleSubmit,
  } = useForm<RoomFormViewData>({
    defaultValues: { name: roomName },
  });

  const options = useRoomFormViewOptions();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography kind="description">{t('updateRoom')}</Typography>
      <FormFieldset>
        <FormLabel htmlFor="name">{t('roomNamePlaceholder')}</FormLabel>
        <Input
          id="name"
          placeholder={t('roomNamePlaceholder')}
          {...register('name', options.name)}
        />
        {errors.name && (
          <FormError role="alert">{errors.name.message}</FormError>
        )}
      </FormFieldset>
      {error && <FormError role="alert">{error.message}</FormError>}
      <Button isLoading={isLoading} disabled={!isDirty} type="submit">
        <Typography size="sm">{t('updateRoom')}</Typography>
      </Button>
    </Form>
  );
};
