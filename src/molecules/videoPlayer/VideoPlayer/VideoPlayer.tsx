import React from "react";
import { useSelectCurrentMessage } from "../../../services/data/messages/selectCurrentMessage";
import { useUpdateMessage } from "../../../services/data/messages/updateMessage";
import { useRoomContext } from "../../../utils/room/RoomContext";
import VideoPlayerView from "../VideoPlayerView/VideoPlayerView";

const VideoPlayer = (): JSX.Element => {
  const { room_id } = useRoomContext();

  const { data: currentMessage } = useSelectCurrentMessage({ roomId: room_id });
  const { mutate: updateMessage } = useUpdateMessage();

  return (
    <>
      {currentMessage && (
        <VideoPlayerView
          message={currentMessage}
          onMessageEnd={updateMessage}
        />
      )}
    </>
  );
};

export default VideoPlayer;
