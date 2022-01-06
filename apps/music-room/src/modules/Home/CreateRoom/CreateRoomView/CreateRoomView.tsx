import { Profile } from '@music-room/data-access';
import {
  Button,
  Flex,
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
import * as Styles from './CreateRoomView.styles';
import {
  CreateRoomViewData,
  useCreateRoomViewOptions,
} from './CreateRoomView.utils';

type Props = {
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
    <Styles.Container>
      <Styles.Content direction="column" gap="lg">
        <Flex direction="row" justifyContent="spaceBetween" alignItems="center">
          <Typography size="xl">Create new room</Typography>
        </Flex>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <FormFieldset>
            <FormLabel htmlFor="slug">{text('roomSlugPlaceholder')}</FormLabel>
            <Input
              id="slug"
              placeholder={text('roomSlugPlaceholder')}
              {...register('slug', options.slug)}
            />
            {errors.slug && (
              <FormError role="alert">{errors.slug.message}</FormError>
            )}
          </FormFieldset>
          {error && <FormError role="alert">{error.message}</FormError>}
          <Button isLoading={isLoading} type="submit">
            {text('addRoom')}
          </Button>
        </Form>
      </Styles.Content>
    </Styles.Container>
  );
};
