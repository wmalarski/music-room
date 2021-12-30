import {
  useRole,
  useSelectAction,
  useSelectCurrentMessage,
  useUpsertAction,
} from '@music-room/data-access';
import { ReactElement } from 'react';
import { ReactionsView } from './ReactionsView/ReactionsView';

type Props = {
  View?: typeof ReactionsView;
};

export const Reactions = ({ View = ReactionsView }: Props): ReactElement => {
  const { room_id, profile_id } = useRole();

  const { data: currentMessage = null } = useSelectCurrentMessage({
    roomId: room_id,
  });

  const { mutate: upsertMessage } = useUpsertAction();
  const { data: action = null } = useSelectAction({
    profileId: profile_id,
    messageId: currentMessage?.id ?? null,
  });

  return (
    <View
      action={action}
      message={currentMessage}
      onChange={(data) =>
        currentMessage &&
        upsertMessage({
          message_id: currentMessage.id,
          profile_id,
          id: action?.id ?? undefined,
          dislike_at: data.dislikeAt,
          like_at: data.likeAt,
        })
      }
    />
  );
};
