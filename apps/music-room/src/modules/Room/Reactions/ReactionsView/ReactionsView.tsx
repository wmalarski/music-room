import { Action, Message } from '@music-room/data-access';
import { Button, Debug } from '@music-room/ui';
import { ReactElement } from 'react';
import { useText } from '../../../../utils';

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
  const text = useText();

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
        {action?.like_at ? text('removeLikeMessage') : text('likeMessage')}
      </Button>
      <Button onClick={handleDislikeClick}>
        {action?.dislike_at
          ? text('removeDislikeMessage')
          : text('dislikeMessage')}
      </Button>
    </>
  );
};
