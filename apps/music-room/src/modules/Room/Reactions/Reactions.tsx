import React, { ReactElement } from 'react';
import { useSelectAction } from '../../../services/data/actions/selectAction';
import { useUpsertAction } from '../../../services/data/actions/upsertAction';
import { useSelectCurrentMessage } from '../../../services/data/messages/selectCurrentMessage';
import { useMemberContext } from '../../../utils/room/MemberContext';
import { ReactionsView } from './ReactionsView/ReactionsView';

type Props = {
  View?: typeof ReactionsView;
};

export const Reactions = ({ View = ReactionsView }: Props): ReactElement => {
  const { room_id, profile_id } = useMemberContext();

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
