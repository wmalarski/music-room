import React from "react";
import { useSelectControls } from "../../../services/data/controls/selectControls";
import { useSubscribeToControls } from "../../../services/data/controls/subscribeToControls";
import { useUpdateControls } from "../../../services/data/controls/updateControls";
import { useSelectCurrentMessage } from "../../../services/data/messages/selectCurrentMessage";
import { useUpdateMessage } from "../../../services/data/messages/updateMessage";
import { useMemberContext } from "../../../utils/room/MemberContext";
import VideoPlayerView, {
  VideoPlayerViewProps,
} from "../VideoPlayerView/VideoPlayerView";

export type VideoPlayerProps = {
  View?: React.ComponentType<VideoPlayerViewProps>;
};

const VideoPlayer = ({
  View = VideoPlayerView,
}: VideoPlayerProps): JSX.Element => {
  const { room_id, profile_id } = useMemberContext();

  const { data: currentMessage } = useSelectCurrentMessage({ roomId: room_id });
  const { mutate: updateMessage } = useUpdateMessage(room_id);

  const { data: controls } = useSelectControls({ roomId: room_id });
  const { mutate: updateControls } = useUpdateControls(room_id);
  useSubscribeToControls({ roomId: room_id });

  return (
    <>
      {currentMessage && controls && (
        <View
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
