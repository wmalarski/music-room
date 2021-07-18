import React from "react";
import { useSelectControls } from "../../../services/data/controls/selectControls";
import { useSubscribeToControls } from "../../../services/data/controls/subscribeToControls";
import { useUpdateControls } from "../../../services/data/controls/updateControls";
import { useSelectCurrentMessage } from "../../../services/data/messages/selectCurrentMessage";
import { useUpdateMessage } from "../../../services/data/messages/updateMessage";
import { useMemberContext } from "../../../utils/room/MemberContext";
import VideoPlayerView from "../VideoPlayerView/VideoPlayerView";

const VideoPlayer = (): JSX.Element => {
  const { room_id, profile_id } = useMemberContext();

  const { data: currentMessage } = useSelectCurrentMessage({ roomId: room_id });
  const { mutate: updateMessage } = useUpdateMessage();

  const { data: controls } = useSelectControls({ roomId: room_id });
  const { mutate: updateControls } = useUpdateControls();
  useSubscribeToControls({ roomId: room_id });

  return (
    <>
      {currentMessage && controls && (
        <VideoPlayerView
          profileId={profile_id}
          controls={controls}
          message={{
            ...currentMessage,
            data: { kind: "message#0.0.1", url: "dQw4w9WgXcQ" },
          }}
          onEnd={() =>
            updateMessage({
              id: currentMessage.id,
              ended_at: new Date().toISOString(),
            })
          }
          onChange={(data) => updateControls({ id: controls.id, ...data })}
        />
      )}
    </>
  );
};

export default VideoPlayer;
