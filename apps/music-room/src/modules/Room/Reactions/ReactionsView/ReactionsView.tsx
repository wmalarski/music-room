import { Action, Message } from '@music-room/data-access';
import { Button, Flex, FormError } from '@music-room/ui';
import { PostgrestError } from '@supabase/supabase-js';
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import { useErrorMessage } from '../../../../hooks/useErrorMessage';

export type ReactionsViewData = {
  likeAt: string | null;
  dislikeAt: string | null;
  message_id: number;
};

type Props = {
  action: Action | null;
  message: Message | null;
  error: PostgrestError | null;
  onChange: (data: ReactionsViewData) => void;
};

export const ReactionsView = ({
  action,
  message,
  error,
  onChange,
}: Props): ReactElement => {
  const { t } = useTranslation('room');

  const handleLikeClick = () => {
    if (!message) return;
    onChange({
      message_id: message?.id,
      likeAt: action?.like_at ? null : new Date().toISOString(),
      dislikeAt: null,
    });
  };

  const handleDislikeClick = () => {
    if (!message) return;
    onChange({
      message_id: message.id,
      likeAt: null,
      dislikeAt: action?.dislike_at ? null : new Date().toISOString(),
    });
  };

  const errorMessage = useErrorMessage({ error });

  return (
    <Flex direction="row">
      <Button onClick={handleLikeClick}>
        {action?.like_at ? t('removeLikeMessage') : t('likeMessage')}
      </Button>
      <Button onClick={handleDislikeClick}>
        {action?.dislike_at ? t('removeDislikeMessage') : t('dislikeMessage')}
      </Button>
      {error && <FormError>{errorMessage}</FormError>}
    </Flex>
  );
};
