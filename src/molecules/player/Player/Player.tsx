import React from "react";
import { useSelectControls } from "../../../services/data/controls/selectControls";
import { useSubscribeToControls } from "../../../services/data/controls/subscribeToControls";
import { useUpdateControls } from "../../../services/data/controls/updateControls";
import { useSelectCurrentMessage } from "../../../services/data/messages/selectCurrentMessage";
import { useUpdateMessage } from "../../../services/data/messages/updateMessage";
import { useRoomContext } from "../../../utils/room/RoomContext";
import PlayerControls from "../PlayerControls/PlayerControls";
import PlayerView from "../PlayerView/PlayerView";

const Player = (): JSX.Element => {
  const { room_id, profile_id } = useRoomContext();

  const { data: controls } = useSelectControls({ roomId: room_id });
  const { mutate: updateControls } = useUpdateControls();
  useSubscribeToControls({ roomId: room_id });

  const { data: currentMessage } = useSelectCurrentMessage({ roomId: room_id });
  const { mutate: updateMessage } = useUpdateMessage();

  return (
    <>
      {controls && (
        <PlayerControls
          controls={controls}
          profileId={profile_id}
          onChange={updateControls}
        />
      )}
      {currentMessage && (
        <PlayerView message={currentMessage} onMessageEnd={updateMessage} />
      )}
    </>
  );
};

export default Player;
