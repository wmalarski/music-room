import { Action, Message } from '@music-room/data-access';
import { Button, Debug } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';

export type ReactionsViewData = {
  likeAt: string | null;
  dislikeAt: string | null;
};

type Props = {
  action: Action | null;
  message: Message | null;
  onChange: (data: ReactionsViewData) => void;
};

export const ReactionsView = ({ action, onChange }: Props): ReactElement => {
  const { t } = useTranslation('room');

  const handleLikeClick = () => {
    onChange({
      likeAt: action?.like_at ? null : new Date().toISOString(),
      dislikeAt: null,
    });
  };

  const handleDislikeClick = () => {
    onChange({
      likeAt: null,
      dislikeAt: action?.dislike_at ? null : new Date().toISOString(),
    });
  };

  return (
    <>
      <Debug value={action} />
      <Button onClick={handleLikeClick}>
        {action?.like_at ? t('removeLikeMessage') : t('likeMessage')}
      </Button>
      <Button onClick={handleDislikeClick}>
        {action?.dislike_at ? t('removeDislikeMessage') : t('dislikeMessage')}
      </Button>
    </>
  );
};
