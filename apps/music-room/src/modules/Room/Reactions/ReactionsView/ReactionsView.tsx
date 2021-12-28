import { Button, Debug } from '@music-room/ui';
import { ReactElement } from 'react';
import { Action, Message } from '../../../../services/data/types';
import useText from '../../../../utils/translations/useText';

type Data = {
  likeAt: string | null;
  dislikeAt: string | null;
};

type Props = {
  action: Action | null;
  message: Message | null;
  onChange: (data: Data) => void;
};

export const ReactionsView = ({ action, onChange }: Props): ReactElement => {
  const text = useText();

  return (
    <>
      <Debug value={action} />
      <Button
        onClick={() =>
          onChange({
            likeAt: action?.like_at ? null : new Date().toISOString(),
            dislikeAt: null,
          })
        }
      >
        {action?.like_at ? text('removeLikeMessage') : text('likeMessage')}
      </Button>
      <Button
        onClick={() =>
          onChange({
            likeAt: null,
            dislikeAt: action?.dislike_at ? null : new Date().toISOString(),
          })
        }
      >
        {action?.dislike_at
          ? text('removeDislikeMessage')
          : text('dislikeMessage')}
      </Button>
    </>
  );
};
