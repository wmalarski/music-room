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
  const text = useText();

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
      <Typography kind="description">{text('updateRoom')}</Typography>
      <FormFieldset>
        <FormLabel htmlFor="name">{text('roomNamePlaceholder')}</FormLabel>
        <Input
          id="name"
          placeholder={text('roomNamePlaceholder')}
          {...register('name', options.name)}
        />
        {errors.name && (
          <FormError role="alert">{errors.name.message}</FormError>
        )}
      </FormFieldset>
      {error && <FormError role="alert">{error.message}</FormError>}
      <Button isLoading={isLoading} disabled={!isDirty} type="submit">
        <Typography size="sm">{text('updateRoom')}</Typography>
      </Button>
    </Form>
  );
};
