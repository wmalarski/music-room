import { Profile } from '@music-room/data-access';
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  Flex,
  IconButton,
  Input,
  Typography,
} from '@music-room/ui';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { Cross1Icon } from '@radix-ui/react-icons';
import { PostgrestError } from '@supabase/supabase-js';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useText } from '../../../../utils';
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
    <Dialog>
      <DialogTrigger asChild>
        <Button>New room</Button>
      </DialogTrigger>
      <DialogContent>
        <Flex direction="column" gap="lg">
          <Flex
            direction="row"
            justifyContent="spaceBetween"
            alignItems="center"
          >
            <DialogTitle>Create new room</DialogTitle>
            <DialogClose asChild>
              <IconButton>
                <AccessibleIcon label="Close">
                  <Cross1Icon />
                </AccessibleIcon>
              </IconButton>
            </DialogClose>
          </Flex>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" gap="md">
              <Flex direction="column" gap="sm">
                <Typography>{text('roomNamePlaceholder')}</Typography>
                <Input
                  placeholder={text('roomNamePlaceholder')}
                  {...register('name', options.name)}
                />
                {errors.name && (
                  <Typography size="sm" kind="error" role="alert">
                    {errors.name.message}
                  </Typography>
                )}
              </Flex>
              <Flex direction="column" gap="sm">
                <Typography>{text('roomSlugPlaceholder')}</Typography>
                <Input
                  placeholder={text('roomSlugPlaceholder')}
                  {...register('slug', options.slug)}
                />
                {errors.slug && (
                  <Typography size="sm" kind="error" role="alert">
                    {errors.slug.message}
                  </Typography>
                )}
              </Flex>
              {error && (
                <Typography size="sm" kind="error" role="alert">
                  {error.message}
                </Typography>
              )}
              <Button isLoading={isLoading} type="submit">
                {text('addRoom')}
              </Button>
            </Flex>
          </form>
        </Flex>
      </DialogContent>
    </Dialog>
  );
};
