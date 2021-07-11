import React from "react";
import { useSelectAction } from "../../../services/data/actions/selectAction";
import { useUpsertAction } from "../../../services/data/actions/upsertAction";
import { useSelectCurrentMessage } from "../../../services/data/messages/selectCurrentMessage";
import ReactionsButtons from "../ReactionButtons/ReactionButtons";

export type ReactionsProps = {
  roomId: number;
  profileId: number;
};

const Reactions = ({ roomId, profileId }: ReactionsProps): JSX.Element => {
  const { data: currentMessage } = useSelectCurrentMessage({ roomId });

  const { mutate: upsertMessage } = useUpsertAction();
  const { data: action = null } = useSelectAction({
    profileId,
    messageId: currentMessage?.id ?? null,
  });

  return (
    <ReactionsButtons
      action={action}
      onChange={(data) =>
        currentMessage &&
        upsertMessage({
          message_id: currentMessage.id,
          profile_id: profileId,
          id: action?.id ?? undefined,
          dislike_at: data.dislikeAt,
          like_at: data.likeAt,
        })
      }
    />
  );
};

export default Reactions;
