import { Alert, Button, Input } from '@music-room/ui';
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder={text('roomNamePlaceholder')}
        {...register('name', options.name)}
      />
      {errors.name && <Alert severity="error">{errors.name.message}</Alert>}
      {error && <Alert severity="error">{error.message}</Alert>}
      <Button isLoading={isLoading} disabled={!isDirty} type="submit">
        {text('updateRoom')}
      </Button>
    </form>
  );
};
