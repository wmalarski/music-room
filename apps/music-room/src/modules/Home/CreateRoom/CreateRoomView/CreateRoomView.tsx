import { Profile } from '@music-room/data-access';
import { Alert, Button, Input } from '@music-room/ui';
import { PostgrestError } from '@supabase/supabase-js';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useText } from '../../../../utils';
import {
  CreateRoomViewData,
  useCreateRoomViewOptions,
} from './CreateRoomView.utils';

export type Props = {
  isLoading: boolean;
  profile: Profile | null;
  error: PostgrestError | null;
  onSubmit: (data: CreateRoomViewData) => void;
};

export const CreateRoomView = ({
  error,
  isLoading,
  onSubmit,
}: Props): ReactElement => {
  const text = useText();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<CreateRoomViewData>();

  const options = useCreateRoomViewOptions();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder={text('roomNamePlaceholder')}
        {...register('name', options.name)}
      />
      {errors.name && <Alert severity="error">{errors.name.message}</Alert>}
      <Input
        placeholder={text('roomSlugPlaceholder')}
        {...register('slug', options.slug)}
      />
      {errors.slug && <Alert severity="error">{errors.slug.message}</Alert>}
      {error && <Alert severity="error">{error.message}</Alert>}
      <Button isLoading={isLoading} type="submit">
        {text('addRoom')}
      </Button>
    </form>
  );
};
