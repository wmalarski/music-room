import React from "react";
import { useSelectAction } from "../../../services/data/actions/selectAction";
import { useUpsertAction } from "../../../services/data/actions/upsertAction";
import { useSelectCurrentMessage } from "../../../services/data/messages/selectCurrentMessage";
import { useRoomContext } from "../../../utils/room/RoomContext";
import ReactionsButtons from "../ReactionButtons/ReactionsButtons";

const Reactions = (): JSX.Element => {
  const { room_id, profile_id } = useRoomContext();

  const { data: currentMessage } = useSelectCurrentMessage({ roomId: room_id });

  const { mutate: upsertMessage } = useUpsertAction();
  const { data: action = null } = useSelectAction({
    profileId: profile_id,
    messageId: currentMessage?.id ?? null,
  });

  return (
    <ReactionsButtons
      action={action}
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

export default Reactions;
